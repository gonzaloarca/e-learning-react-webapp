const Routes = {
    Landing: {
        path: "/",
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