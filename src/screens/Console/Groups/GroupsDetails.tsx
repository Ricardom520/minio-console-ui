import React, { Fragment, useEffect, useState } from "react";
import PageHeader from "../Common/PageHeader/PageHeader";
import { Link, useParams } from "react-router-dom";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import {
  actionsTray,
  containerForHeader,
  searchField,
  spacingUtils,
  tableStyles,
} from "../Common/FormComponents/common/styleLibrary";
import {
  setErrorSnackMessage,
  setModalErrorSnackMessage,
} from "../../../actions";
import { connect } from "react-redux";
import withStyles from "@mui/styles/withStyles";
import { Button, Grid, Tooltip } from "@mui/material";
import ScreenTitle from "../Common/ScreenTitle/ScreenTitle";
import { IAMPoliciesIcon, TrashIcon, UsersIcon } from "../../../icons";
import TableWrapper from "../Common/TableWrapper/TableWrapper";
import history from "../../../history";
import api from "../../../common/api";
import SetPolicy from "../Policies/SetPolicy";
import AddGroupMember from "./AddGroupMember";
import { ErrorResponseHandler } from "../../../common/types";
import DeleteGroup from "./DeleteGroup";
import VerticalTabs from "../Common/VerticalTabs/VerticalTabs";
import FormSwitchWrapper from "../Common/FormComponents/FormSwitchWrapper/FormSwitchWrapper";
import PageLayout from "../Common/Layout/PageLayout";
import BackLink from "../../../common/BackLink";
import PanelTitle from "../Common/PanelTitle/PanelTitle";
import BoxIconButton from "../Common/BoxIconButton/BoxIconButton";
import SearchBox from "../Common/SearchBox";
import {
  CONSOLE_UI_RESOURCE,
  IAM_SCOPES,
} from "../../../common/SecureComponent/permissions";
import SecureComponent, {
  hasPermission,
} from "../../../common/SecureComponent/SecureComponent";

const styles = (theme: Theme) =>
  createStyles({
    pageContainer: {
      border: "1px solid #EAEAEA",
      width: "100%",
    },
    breadcrumLink: {
      textDecoration: "none",
      color: "black",
    },
    statusLabel: {
      fontSize: ".8rem",
      marginRight: ".7rem",
    },
    statusValue: {
      fontWeight: "bold",
      fontSize: ".9rem",
      marginRight: ".7rem",
    },
    searchField: {
      ...searchField.searchField,
      maxWidth: 280,
    },
    ...tableStyles,
    ...spacingUtils,
    actionsTray: {
      ...actionsTray.actionsTray,

      alignItems: "center",
      "& h1": {
        flex: 1,
      },
      "& button": {
        marginLeft: ".8rem",
      },
      "@media (max-width: 900px)": {
        justifyContent: "flex-end",
        "& h1": {
          display: "none",
        },
        "& button": {
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        },
      },
    },
    ...containerForHeader(theme.spacing(4)),
  });

interface IGroupDetailsProps {
  classes: any;
  match: any;
  setErrorSnackMessage: typeof setErrorSnackMessage;
}

type DetailsHeaderProps = {
  classes: any;
};

type GroupInfo = {
  members?: any[];
  name?: string;
  policy?: string;
  status?: string;
};

export const formatPolicy = (policy: string = ""): string[] => {
  if (policy.length <= 0) return [];
  return policy.split(",");
};

export const getPoliciesAsString = (policies: string[]): string => {
  return policies.join(", ");
};

const GroupDetailsHeader = ({ classes }: DetailsHeaderProps) => {
  return (
    <PageHeader
      label={
        <Fragment>
          <Link to={"/reporter/minio/groups"} className={classes.breadcrumLink}>
            Groups
          </Link>
        </Fragment>
      }
      actions={<React.Fragment />}
    />
  );
};

const GroupsDetails = ({ classes }: IGroupDetailsProps) => {
  const [groupDetails, setGroupDetails] = useState<GroupInfo>({});

  /*Modals*/
  const [policyOpen, setPolicyOpen] = useState<boolean>(false);
  const [usersOpen, setUsersOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [memberFilter, setMemberFilter] = useState<string>("");

  //const [policyFilter, setPolicyFilter] = useState<string>("");

  const { groupName = "" } = useParams<Record<string, string>>();

  const { members = [], policy = "", status: groupEnabled } = groupDetails;

  const filteredMembers = members.filter((elementItem) =>
    elementItem.includes(memberFilter)
  );

  useEffect(() => {
    if (groupName) {
      fetchGroupInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupName]);

  const groupPolicies = formatPolicy(policy);
  const isGroupEnabled = groupEnabled === "enabled";
  const memberActionText = members.length > 0 ? "Edit Members" : "Add Members";

  const getGroupDetails = hasPermission(CONSOLE_UI_RESOURCE, [
    IAM_SCOPES.ADMIN_GET_GROUP,
  ]);

  function fetchGroupInfo() {
    if (getGroupDetails) {
      api
        .invoke("GET", `/api/v1/group?name=${encodeURI(groupName)}`)
        .then((res: any) => {
          setGroupDetails(res);
        })
        .catch((err) => {
          setModalErrorSnackMessage(err);
          setGroupDetails({});
        });
    }
  }

  function toggleGroupStatus(nextStatus: boolean) {
    return api
      .invoke("PUT", `/api/v1/group?name=${encodeURI(groupName)}`, {
        group: groupName,
        members: members,
        status: nextStatus ? "enabled" : "disabled",
      })
      .then((res) => {
        fetchGroupInfo();
      })
      .catch((err: ErrorResponseHandler) => {
        setModalErrorSnackMessage(err);
      });
  }

  const groupsTabContent = (
    <React.Fragment>
      <div className={classes.actionsTray}>
        <PanelTitle>Members</PanelTitle>
        <SearchBox
          placeholder={"Search members"}
          onChange={(searchText) => {
            setMemberFilter(searchText);
          }}
          classes={classes}
        />
        <Button
          variant="contained"
          color="primary"
          endIcon={<UsersIcon />}
          size="medium"
          onClick={() => {
            setUsersOpen(true);
          }}
        >
          {memberActionText}
        </Button>
      </div>

      <div className={classes.tableBlock}>
        <TableWrapper
          columns={[{ label: "Access Key", elementKey: "" }]}
          selectedItems={[]}
          isLoading={false}
          records={filteredMembers}
          entityName="Users"
          idField=""
        />
      </div>
    </React.Fragment>
  );

  const policiesTabContent = (
    <React.Fragment>
      <div className={classes.actionsTray}>
        <PanelTitle>Policies</PanelTitle>
        <Button
          variant="contained"
          color="primary"
          endIcon={<IAMPoliciesIcon />}
          size="medium"
          onClick={() => {
            setPolicyOpen(true);
          }}
        >
          Set Policies
        </Button>
      </div>
      <div className={classes.tableBlock}>
        <TableWrapper
          itemActions={[
            {
              type: "view",
              onClick: (policy) => {
                history.push(`/policies/${policy}`);
              },
            },
          ]}
          columns={[{ label: "Policy", elementKey: "" }]}
          isLoading={false}
          records={groupPolicies}
          entityName="Policies"
          idField=""
        />
      </div>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <GroupDetailsHeader classes={classes} />
      <BackLink to={"/reporter/minio/groups"} label={"Return to Groups"} />

      <PageLayout className={classes.pageContainer}>
        <Grid item xs={12}>
          <ScreenTitle
            icon={
              <Fragment>
                <UsersIcon width={40} />
              </Fragment>
            }
            title={groupName}
            subTitle={null}
            actions={
              <Fragment>
                <span className={classes.statusLabel}>Group Status:</span>
                <span className={classes.statusValue}>
                  {isGroupEnabled ? "Enabled" : "Disabled"}
                </span>
                <FormSwitchWrapper
                  indicatorLabels={["Enabled", "Disabled"]}
                  checked={isGroupEnabled}
                  value={"group_enabled"}
                  id="group-status"
                  name="group-status"
                  onChange={() => {
                    toggleGroupStatus(!isGroupEnabled);
                  }}
                  switchOnly
                />

                <Tooltip title="Delete Group">
                  <div className={classes.spacerLeft}>
                    <BoxIconButton
                      color="primary"
                      aria-label="Delete Group"
                      onClick={() => {
                        setDeleteOpen(true);
                      }}
                      size="large"
                    >
                      <TrashIcon />
                    </BoxIconButton>
                  </div>
                </Tooltip>
              </Fragment>
            }
          />
        </Grid>

        <Grid item xs={12}>
          <VerticalTabs>
            {{
              tabConfig: { label: "Members" },
              content: groupsTabContent,
            }}
            {{
              tabConfig: { label: "Policies" },
              content: policiesTabContent,
            }}
          </VerticalTabs>
        </Grid>
      </PageLayout>
      {/*Modals*/}
      {policyOpen ? (
        <SetPolicy
          open={policyOpen}
          selectedGroup={groupName}
          selectedUser={null}
          closeModalAndRefresh={() => {
            setPolicyOpen(false);
            fetchGroupInfo();
          }}
        />
      ) : null}

      {usersOpen ? (
        <AddGroupMember
          selectedGroup={groupName}
          onSaveClick={() => {}}
          title={memberActionText}
          groupStatus={groupEnabled}
          classes={classes}
          preSelectedUsers={members}
          open={usersOpen}
          onClose={() => {
            setUsersOpen(false);
            fetchGroupInfo();
          }}
        />
      ) : null}

      {deleteOpen && (
        <DeleteGroup
          deleteOpen={deleteOpen}
          selectedGroup={groupName}
          closeDeleteModalAndRefresh={(isDelSuccess: boolean) => {
            setDeleteOpen(false);
            if (isDelSuccess) {
              history.push("/reporter/minio/groups");
            }
          }}
        />
      )}
      {/*Modals*/}
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  setErrorSnackMessage,
};

const connector = connect(null, mapDispatchToProps);

export default withStyles(styles)(connector(GroupsDetails));
