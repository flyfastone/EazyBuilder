(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{qPgm:function(e,t,r){"use strict";r("EWC9"),r("jaBk"),r("S26F"),r("TZoF"),r("pBsb");var a=r("XRO8"),i=r("/lV4"),s=r("2ibD"),n=r("3twG");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l={DEFAULT_PER_PAGE:20,groupsPath:"/api/:version/groups.json",groupPath:"/api/:version/groups/:id",groupMembersPath:"/api/:version/groups/:id/members",groupMilestonesPath:"/api/:version/groups/:id/milestones",subgroupsPath:"/api/:version/groups/:id/subgroups",namespacesPath:"/api/:version/namespaces.json",groupInvitationsPath:"/api/:version/groups/:id/invitations",groupPackagesPath:"/api/:version/groups/:id/packages",projectPackagesPath:"/api/:version/projects/:id/packages",projectPackagePath:"/api/:version/projects/:id/packages/:package_id",groupProjectsPath:"/api/:version/groups/:id/projects.json",groupSharePath:"/api/:version/groups/:id/share",projectsPath:"/api/:version/projects.json",projectPath:"/api/:version/projects/:id",forkedProjectsPath:"/api/:version/projects/:id/forks",projectLabelsPath:"/:namespace_path/:project_path/-/labels",projectFileSchemaPath:"/:namespace_path/:project_path/-/schema/:ref/:filename",projectUsersPath:"/api/:version/projects/:id/users",projectInvitationsPath:"/api/:version/projects/:id/invitations",projectMembersPath:"/api/:version/projects/:id/members",projectMergeRequestsPath:"/api/:version/projects/:id/merge_requests",projectMergeRequestPath:"/api/:version/projects/:id/merge_requests/:mrid",projectMergeRequestChangesPath:"/api/:version/projects/:id/merge_requests/:mrid/changes",projectMergeRequestVersionsPath:"/api/:version/projects/:id/merge_requests/:mrid/versions",projectRunnersPath:"/api/:version/projects/:id/runners",projectProtectedBranchesPath:"/api/:version/projects/:id/protected_branches",projectSearchPath:"/api/:version/projects/:id/search",projectSharePath:"/api/:version/projects/:id/share",projectMilestonesPath:"/api/:version/projects/:id/milestones",projectIssuePath:"/api/:version/projects/:id/issues/:issue_iid",mergeRequestsPath:"/api/:version/merge_requests",groupLabelsPath:"/api/:version/groups/:namespace_path/labels",issuableTemplatePath:"/:namespace_path/:project_path/templates/:type/:key",issuableTemplatesPath:"/:namespace_path/:project_path/templates/:type",projectTemplatePath:"/api/:version/projects/:id/templates/:type/:key",projectTemplatesPath:"/api/:version/projects/:id/templates/:type",userCountsPath:"/api/:version/user_counts",usersPath:"/api/:version/users.json",userPath:"/api/:version/users/:id",userStatusPath:"/api/:version/users/:id/status",userProjectsPath:"/api/:version/users/:id/projects",userPostStatusPath:"/api/:version/user/status",commitPath:"/api/:version/projects/:id/repository/commits/:sha",commitsPath:"/api/:version/projects/:id/repository/commits",applySuggestionPath:"/api/:version/suggestions/:id/apply",applySuggestionBatchPath:"/api/:version/suggestions/batch_apply",commitPipelinesPath:"/:project_id/commit/:sha/pipelines",branchSinglePath:"/api/:version/projects/:id/repository/branches/:branch",createBranchPath:"/api/:version/projects/:id/repository/branches",releasesPath:"/api/:version/projects/:id/releases",releasePath:"/api/:version/projects/:id/releases/:tag_name",releaseLinksPath:"/api/:version/projects/:id/releases/:tag_name/assets/links",releaseLinkPath:"/api/:version/projects/:id/releases/:tag_name/assets/links/:link_id",mergeRequestsPipeline:"/api/:version/projects/:id/merge_requests/:merge_request_iid/pipelines",adminStatisticsPath:"/api/:version/application/statistics",pipelineJobsPath:"/api/:version/projects/:id/pipelines/:pipeline_id/jobs",pipelineSinglePath:"/api/:version/projects/:id/pipelines/:pipeline_id",pipelinesPath:"/api/:version/projects/:id/pipelines/",createPipelinePath:"/api/:version/projects/:id/pipeline",environmentsPath:"/api/:version/projects/:id/environments",contextCommitsPath:"/api/:version/projects/:id/merge_requests/:merge_request_iid/context_commits",rawFilePath:"/api/:version/projects/:id/repository/files/:path/raw",issuePath:"/api/:version/projects/:id/issues/:issue_iid",tagsPath:"/api/:version/projects/:id/repository/tags",freezePeriodsPath:"/api/:version/projects/:id/freeze_periods",freezePeriodPath:"/api/:version/projects/:id/freeze_periods/:freeze_period_id",usageDataIncrementCounterPath:"/api/:version/usage_data/increment_counter",usageDataIncrementUniqueUsersPath:"/api/:version/usage_data/increment_unique_users",featureFlagUserLists:"/api/:version/projects/:id/feature_flags_user_lists",featureFlagUserList:"/api/:version/projects/:id/feature_flags_user_lists/:list_iid",containerRegistryDetailsPath:"/api/:version/registry/repositories/:id/",projectNotificationSettingsPath:"/api/:version/projects/:id/notification_settings",groupNotificationSettingsPath:"/api/:version/groups/:id/notification_settings",notificationSettingsPath:"/api/:version/notification_settings",group(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};const r=l.buildUrl(l.groupPath).replace(":id",e);return s.a.get(r).then((function(e){let{data:r}=e;return t(r),r}))},groupPackages(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(this.groupPackagesPath).replace(":id",e);return s.a.get(r,t)},projectPackages(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(this.projectPackagesPath).replace(":id",e);return s.a.get(r,t)},buildProjectPackageUrl(e,t){return l.buildUrl(this.projectPackagePath).replace(":id",e).replace(":package_id",t)},projectPackage(e,t){const r=this.buildProjectPackageUrl(e,t);return s.a.get(r)},deleteProjectPackage(e,t){const r=this.buildProjectPackageUrl(e,t);return s.a.delete(r)},containerRegistryDetails(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(this.containerRegistryDetailsPath).replace(":id",e);return s.a.get(r,t)},groupMembers(e,t){const r=l.buildUrl(this.groupMembersPath).replace(":id",encodeURIComponent(e));return s.a.get(r,{params:p({per_page:20},t)})},addGroupMembersByUserId(e,t){const r=l.buildUrl(this.groupMembersPath).replace(":id",encodeURIComponent(e));return s.a.post(r,t)},inviteGroupMembersByEmail(e,t){const r=l.buildUrl(this.groupInvitationsPath).replace(":id",encodeURIComponent(e));return s.a.post(r,t)},groupMilestones(e,t){const r=l.buildUrl(this.groupMilestonesPath).replace(":id",encodeURIComponent(e));return s.a.get(r,{params:p({per_page:20},t)})},groups(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};const a=l.buildUrl(l.groupsPath);return s.a.get(a,{params:p({search:e,per_page:20},t)}).then((function(e){let{data:t}=e;return r(t),t}))},groupLabels(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(l.groupLabelsPath).replace(":namespace_path",e);return s.a.get(r,t).then((function(e){let{data:t}=e;return t}))},namespaces(e,t){const r=l.buildUrl(l.namespacesPath);return s.a.get(r,{params:{search:e,per_page:20}}).then((function(e){let{data:r}=e;return t(r)}))},projects(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};const a=l.buildUrl(l.projectsPath),i={search:e,per_page:20,simple:!0};return gon.current_user_id&&(i.membership=!0),s.a.get(a,{params:Object.assign(i,t)}).then((function(e){let{data:t,headers:a}=e;return r(t),{data:t,headers:a}}))},projectUsers(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=l.buildUrl(this.projectUsersPath).replace(":id",encodeURIComponent(e));return s.a.get(a,{params:p({search:t,per_page:20},r)}).then((function(e){let{data:t}=e;return t}))},addProjectMembersByUserId(e,t){const r=l.buildUrl(this.projectMembersPath).replace(":id",encodeURIComponent(e));return s.a.post(r,t)},inviteProjectMembersByEmail(e,t){const r=l.buildUrl(this.projectInvitationsPath).replace(":id",encodeURIComponent(e));return s.a.post(r,t)},project(e){const t=l.buildUrl(l.projectPath).replace(":id",encodeURIComponent(e));return s.a.get(t)},updateProject(e,t){const r=l.buildUrl(l.projectPath).replace(":id",encodeURIComponent(e));return s.a.put(r,t)},projectForks(e,t){const r=l.buildUrl(l.forkedProjectsPath).replace(":id",encodeURIComponent(e));return s.a.get(r,{params:t})},projectMergeRequests(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(l.projectMergeRequestsPath).replace(":id",encodeURIComponent(e));return s.a.get(r,{params:t})},createProjectMergeRequest(e,t){const r=l.buildUrl(l.projectMergeRequestsPath).replace(":id",encodeURIComponent(e));return s.a.post(r,t)},projectMergeRequest(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=l.buildUrl(l.projectMergeRequestPath).replace(":id",encodeURIComponent(e)).replace(":mrid",t);return s.a.get(a,{params:r})},projectMergeRequestChanges(e,t){const r=l.buildUrl(l.projectMergeRequestChangesPath).replace(":id",encodeURIComponent(e)).replace(":mrid",t);return s.a.get(r)},projectMergeRequestVersions(e,t){const r=l.buildUrl(l.projectMergeRequestVersionsPath).replace(":id",encodeURIComponent(e)).replace(":mrid",t);return s.a.get(r)},projectRunners(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(l.projectRunnersPath).replace(":id",encodeURIComponent(e));return s.a.get(r,t)},projectProtectedBranches(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const r=l.buildUrl(l.projectProtectedBranchesPath).replace(":id",encodeURIComponent(e));return s.a.get(r,{params:{search:t,per_page:20}}).then((function(e){let{data:t}=e;return t}))},projectSearch(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(l.projectSearchPath).replace(":id",encodeURIComponent(e));return s.a.get(r,{params:{search:t.search,scope:t.scope}})},projectShareWithGroup(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(l.projectSharePath).replace(":id",encodeURIComponent(e));return s.a.post(r,{expires_at:t.expires_at,group_access:t.group_access,group_id:t.group_id})},projectMilestones(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(l.projectMilestonesPath).replace(":id",encodeURIComponent(e));return s.a.get(r,{params:t})},addProjectIssueAsTodo(e,t){const r=l.buildUrl(l.projectIssuePath).replace(":id",encodeURIComponent(e)).replace(":issue_iid",encodeURIComponent(t));return s.a.post("".concat(r,"/todo"))},mergeRequests(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=l.buildUrl(l.mergeRequestsPath);return s.a.get(t,{params:e})},newLabel(e,t,r,a){let i,n;return t?(i=l.buildUrl(l.projectLabelsPath).replace(":namespace_path",e).replace(":project_path",t),n={label:r}):(i=l.buildUrl(l.groupLabelsPath).replace(":namespace_path",e),n={name:r.title,color:r.color}),s.a.post(i,p({},n)).then((function(e){return a(e.data)})).catch((function(e){return a(e.response.data)}))},groupProjects(e,t,r,n){const o=l.buildUrl(l.groupProjectsPath).replace(":id",e),c={search:t,per_page:20};return s.a.get(o,{params:p(p({},c),r)}).then((function(e){let{data:t}=e;return n?n(t):t})).catch((function(){Object(a.c)(Object(i.a)("Something went wrong while fetching projects")),n&&n()}))},groupShareWithGroup(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(l.groupSharePath).replace(":id",encodeURIComponent(e));return s.a.post(r,{expires_at:t.expires_at,group_access:t.group_access,group_id:t.group_id})},commit(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=l.buildUrl(this.commitPath).replace(":id",encodeURIComponent(e)).replace(":sha",encodeURIComponent(t));return s.a.get(a,{params:r})},commitMultiple(e,t){const r=l.buildUrl(l.commitsPath).replace(":id",encodeURIComponent(e));return s.a.post(r,JSON.stringify(t),{headers:{"Content-Type":"application/json; charset=utf-8"}})},applySuggestion(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const r=l.buildUrl(l.applySuggestionPath).replace(":id",encodeURIComponent(e)),a={commit_message:t};return s.a.put(r,a)},applySuggestionBatch(e){const t=l.buildUrl(l.applySuggestionBatchPath);return s.a.put(t,{ids:e})},commitPipelines(e,t){const r=e.split("/").map((function(e){return encodeURIComponent(e)})).join("/"),a=l.buildUrl(l.commitPipelinesPath).replace(":project_id",r).replace(":sha",encodeURIComponent(t));return s.a.get(a)},branchSingle(e,t){const r=l.buildUrl(l.branchSinglePath).replace(":id",encodeURIComponent(e)).replace(":branch",encodeURIComponent(t));return s.a.get(r)},projectTemplate(e,t,r,a,i){const n=l.buildUrl(this.projectTemplatePath).replace(":id",encodeURIComponent(e)).replace(":type",t).replace(":key",encodeURIComponent(r));return s.a.get(n,{params:a}).then((function(e){return i&&i(e.data),e}))},projectTemplates(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0;const i=l.buildUrl(this.projectTemplatesPath).replace(":id",encodeURIComponent(e)).replace(":type",t);return s.a.get(i,{params:r}).then((function(e){return a&&a(e.data),e}))},issueTemplate(e,t,r,a,i){const n=this.buildIssueTemplateUrl(l.issuableTemplatePath,a,t,e).replace(":key",encodeURIComponent(r));return s.a.get(n).then((function(e){let{data:t}=e;return i(null,t)})).catch(i)},issueTemplates(e,t,r,a){const i=this.buildIssueTemplateUrl(l.issuableTemplatesPath,r,t,e);return s.a.get(i).then((function(e){let{data:t}=e;return a(null,t)})).catch(a)},buildIssueTemplateUrl:(e,t,r,a)=>l.buildUrl(e).replace(":type",t).replace(":project_path",r).replace(":namespace_path",a),users(e,t){const r=l.buildUrl(this.usersPath);return s.a.get(r,{params:p({search:e,per_page:20},t)})},user(e,t){const r=l.buildUrl(this.userPath).replace(":id",encodeURIComponent(e));return s.a.get(r,{params:t})},userCounts(){const e=l.buildUrl(this.userCountsPath);return s.a.get(e)},userStatus(e,t){const r=l.buildUrl(this.userStatusPath).replace(":id",encodeURIComponent(e));return s.a.get(r,{params:t})},userProjects(e,t,r,n){const o=l.buildUrl(l.userProjectsPath).replace(":id",e),c={search:t,per_page:20};return s.a.get(o,{params:p(p({},c),r)}).then((function(e){let{data:t}=e;return n(t)})).catch((function(){return Object(a.c)(Object(i.a)("Something went wrong while fetching projects"))}))},branches(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=l.buildUrl(this.createBranchPath).replace(":id",encodeURIComponent(e));return s.a.get(a,{params:p({search:t,per_page:20},r)})},createBranch(e,t){let{ref:r,branch:a}=t;const i=l.buildUrl(this.createBranchPath).replace(":id",encodeURIComponent(e));return s.a.post(i,{ref:r,branch:a})},postUserStatus(e){let{emoji:t,message:r,availability:a}=e;const i=l.buildUrl(this.userPostStatusPath);return s.a.put(i,{emoji:t,message:r,availability:a})},postMergeRequestPipeline(e,t){let{mergeRequestId:r}=t;const a=l.buildUrl(this.mergeRequestsPipeline).replace(":id",encodeURIComponent(e)).replace(":merge_request_iid",r);return s.a.post(a)},releases(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(this.releasesPath).replace(":id",encodeURIComponent(e));return s.a.get(r,{params:p({per_page:20},t)})},release(e,t){const r=l.buildUrl(this.releasePath).replace(":id",encodeURIComponent(e)).replace(":tag_name",encodeURIComponent(t));return s.a.get(r)},createRelease(e,t){const r=l.buildUrl(this.releasesPath).replace(":id",encodeURIComponent(e));return s.a.post(r,t)},updateRelease(e,t,r){const a=l.buildUrl(this.releasePath).replace(":id",encodeURIComponent(e)).replace(":tag_name",encodeURIComponent(t));return s.a.put(a,r)},createReleaseLink(e,t,r){const a=l.buildUrl(this.releaseLinksPath).replace(":id",encodeURIComponent(e)).replace(":tag_name",encodeURIComponent(t));return s.a.post(a,r)},deleteReleaseLink(e,t,r){const a=l.buildUrl(this.releaseLinkPath).replace(":id",encodeURIComponent(e)).replace(":tag_name",encodeURIComponent(t)).replace(":link_id",encodeURIComponent(r));return s.a.delete(a)},adminStatistics(){const e=l.buildUrl(this.adminStatisticsPath);return s.a.get(e)},pipelineSingle(e,t){const r=l.buildUrl(this.pipelineSinglePath).replace(":id",encodeURIComponent(e)).replace(":pipeline_id",encodeURIComponent(t));return s.a.get(r)},pipelineJobs(e,t,r){const a=l.buildUrl(this.pipelineJobsPath).replace(":id",encodeURIComponent(e)).replace(":pipeline_id",encodeURIComponent(t));return s.a.get(a,{params:r})},pipelines(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(this.pipelinesPath).replace(":id",encodeURIComponent(e));return s.a.get(r,{params:t})},createPipeline(e,t){const r=l.buildUrl(this.createPipelinePath).replace(":id",encodeURIComponent(e));return s.a.post(r,t,{headers:{"Content-Type":"application/json"}})},environments(e){const t=l.buildUrl(this.environmentsPath).replace(":id",encodeURIComponent(e));return s.a.get(t)},createContextCommits(e,t,r){const a=l.buildUrl(this.contextCommitsPath).replace(":id",encodeURIComponent(e)).replace(":merge_request_iid",t);return s.a.post(a,r)},allContextCommits(e,t){const r=l.buildUrl(this.contextCommitsPath).replace(":id",encodeURIComponent(e)).replace(":merge_request_iid",t);return s.a.get(r)},removeContextCommits(e,t,r){const a=l.buildUrl(this.contextCommitsPath).replace(":id",e).replace(":merge_request_iid",t);return s.a.delete(a,{data:r})},getRawFile(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=l.buildUrl(this.rawFilePath).replace(":id",encodeURIComponent(e)).replace(":path",encodeURIComponent(t));return s.a.get(a,{params:r})},updateIssue(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=l.buildUrl(l.issuePath).replace(":id",encodeURIComponent(e)).replace(":issue_iid",encodeURIComponent(t));return s.a.put(a,r)},updateMergeRequest(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=l.buildUrl(l.projectMergeRequestPath).replace(":id",encodeURIComponent(e)).replace(":mrid",encodeURIComponent(t));return s.a.put(a,r)},tags(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=l.buildUrl(this.tagsPath).replace(":id",encodeURIComponent(e));return s.a.get(a,{params:p({search:t,per_page:20},r)})},freezePeriods(e){const t=l.buildUrl(this.freezePeriodsPath).replace(":id",encodeURIComponent(e));return s.a.get(t)},createFreezePeriod(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(this.freezePeriodsPath).replace(":id",encodeURIComponent(e));return s.a.post(r,t)},updateFreezePeriod(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=l.buildUrl(this.freezePeriodPath).replace(":id",encodeURIComponent(e)).replace(":freeze_period_id",encodeURIComponent(t.id));return s.a.put(r,t)},trackRedisCounterEvent(e){var t;if(!(null===(t=gon.features)||void 0===t?void 0:t.usageDataApi))return null;const r=l.buildUrl(this.usageDataIncrementCounterPath);return s.a.post(r,{event:e},{headers:{"Content-Type":"application/json"}})},trackRedisHllUserEvent(e){var t;if(!(null===(t=gon.features)||void 0===t?void 0:t.usageDataApi))return null;const r=l.buildUrl(this.usageDataIncrementUniqueUsersPath);return s.a.post(r,{event:e},{headers:{"Content-Type":"application/json"}})},buildUrl:e=>Object(n.p)(gon.relative_url_root||"",e.replace(":version",gon.api_version)),fetchFeatureFlagUserLists(e,t){const r=l.buildUrl(this.featureFlagUserLists).replace(":id",e);return s.a.get(r,{params:{page:t}})},searchFeatureFlagUserLists(e,t){const r=l.buildUrl(this.featureFlagUserLists).replace(":id",e);return s.a.get(r,{params:{search:t}})},createFeatureFlagUserList(e,t){const r=l.buildUrl(this.featureFlagUserLists).replace(":id",e);return s.a.post(r,t)},fetchFeatureFlagUserList(e,t){const r=l.buildUrl(this.featureFlagUserList).replace(":id",e).replace(":list_iid",t);return s.a.get(r)},updateFeatureFlagUserList(e,t){const r=l.buildUrl(this.featureFlagUserList).replace(":id",e).replace(":list_iid",t.iid);return s.a.put(r,t)},deleteFeatureFlagUserList(e,t){const r=l.buildUrl(this.featureFlagUserList).replace(":id",e).replace(":list_iid",t);return s.a.delete(r)},async updateNotificationSettings(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=l.buildUrl(this.notificationSettingsPath);return e?a=l.buildUrl(this.projectNotificationSettingsPath).replace(":id",e):t&&(a=l.buildUrl(this.groupNotificationSettingsPath).replace(":id",t)),await s.a.put(a,r)},async getNotificationSettings(e,t){let r=l.buildUrl(this.notificationSettingsPath);return e?r=l.buildUrl(this.projectNotificationSettingsPath).replace(":id",e):t&&(r=l.buildUrl(this.groupNotificationSettingsPath).replace(":id",t)),await s.a.get(r)}};t.a=l}}]);
//# sourceMappingURL=commons-pages.admin-pages.admin.abuse_reports-pages.admin.application_settings-pages.admin.applicati-d39c1ef8.8d13c4f9.chunk.js.map