const Routes = {
    Landing: {
        path: "/",
        chooseRole: "/choose-role",
    },
    Courses: {
        path: "/courses",
    },
    Cognito: {
        path: "/cognito",
        callbackUrl: "/cognito/callback",
        logoutUrl: "/cognito/logout",
    },
    Messages: {
        path: "/messages",
    }
};

export default Routes;