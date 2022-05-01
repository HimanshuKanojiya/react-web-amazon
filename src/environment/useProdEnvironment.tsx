export const useProdEnvironment = (): ProdEnvironmentFunctions => {
  const getFireBaseAPIKey = (): string => {
    return process.env.REACT_APP_FIREBASE_API_KEY!;
  };

  const getFireBaseAuthDomain = (): string => {
    return process.env.REACT_APP_FIREBASE_AUTH_DOMAIN!;
  };

  const getFireBaseProjectId = (): string => {
    return process.env.REACT_APP_FIREBASE_PROJECT_ID!;
  };

  const getFireBaseStorageBucket = (): string => {
    return process.env.REACT_APP_FIREBASE_STORAGE_BUCKET!;
  };

  const getFireBaseMessaginSenderId = (): string => {
    return process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID!;
  };

  const getFireBaseAppId = (): string => {
    return process.env.REACT_APP_FIREBASE_APP_ID!;
  };

  return {
    getFireBaseAPIKey,
    getFireBaseAuthDomain,
    getFireBaseAppId,
    getFireBaseProjectId,
    getFireBaseStorageBucket,
    getFireBaseMessaginSenderId,
  };
};
