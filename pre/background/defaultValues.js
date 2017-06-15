const defaultValues = [
  ['userId',(Math.random().toString(36)+'00000000000000000').slice(2, 19)],
  ['showAds',false],
  ['notifyStateChange',true],
  ['notifyInstallation',true],
  ['notifyRemoval',true],
  ['historyInstall',true],
  ['historyRemove',true],
  ['historyUpdate',true],
  ['historyEnable',true],
  ['historyDisable',true],
  ['autoState',true],
  ['autoStateNotification',true],
  ['autoStateRules','[]'],
  ['sortOrder','nameState'],
  ['recoExtensions',true],
  ['defaultPage','manage'],
  ['notificationDuration_autoState',5],
  ['notificationDuration_stateChange',5],
  ['notificationDuration_installation',-1],
  ['notificationDuration_removal',-1],
  ['listView',true],
  ['sendUsage',true]
];

export { defaultValues };
