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
    }
};

export default Routes;