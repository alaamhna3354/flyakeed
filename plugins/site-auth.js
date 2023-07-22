import axios from 'axios';
export default defineNuxtPlugin(async (nuxtApp) => {
  const { apiBase, api, serverApiBase, serverApi } = useRuntimeConfig();
  // if (typeof window !== 'undefined') {
  if (process.client) {
    // Get Main Site Token
    const mainToken = localStorage.getItem("mainToken");
    // Store Main Site Token
    useMainToken().value = mainToken;
    // Get Refresh Token for Main Token
    // Get User Token
    const token = localStorage.getItem("token");
    // Get User Info
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // make global isAuthenticated state true
    useAuth().value.isAuthenticated = token ? true : false;
    // store Token in the store
    useToken().value = token;
    // get account type from localstorage
    // Menus
    // const mainMenu = localStorage.getItem("mainMenu")
    // useMenus().value = mainMenu ? JSON.parse(mainMenu) : null

    // Get Main Site Token
    // if (!mainToken) {
    //   const clientId = "3NoAusQwSa1dvBmE8zIsGC11YVwtXAA5";
    //   const clientSecret = "uiyn4GwLGDzG5xtI";
    //   const tokenEndpoint = "https://test.api.amadeus.com/v1/security/oauth2/token"
      
    //   try {
    //     const data = new URLSearchParams();
    //     data.append("grant_type", "client_credentials");
    //     data.append("client_id", clientId);
    //     data.append("client_secret", clientSecret);
    //     // const response = await $fetch(tokenEndpoint, {
    //     //   headers: {
    //     //     "Content-Type": "application/x-www-form-urlencoded",
    //     //   },
    //     //   method: 'POST',
    //     //   body: data
    //     // });
    //     const response = await axios.post(tokenEndpoint, data);
    
    //     // console.log("response", response);
    
    //     if (response.data && response.data.access_token) {
    //       const accessToken = response.data.access_token;
    //       // Store the access token in local storage
    //       // console.log("responseaccessToken", accessToken);
    //       window.localStorage.setItem("access_token", accessToken);
    //       // Make the access token globally available through the app object
    //       app.$access_token = accessToken;
    //     } else {
    //       throw new Error("Failed to get access token.");
    //     }
    //   } catch (error) {
    //     throw error;
    //   }
   
    
    // }

   

   
  }
});
