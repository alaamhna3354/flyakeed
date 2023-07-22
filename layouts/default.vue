<template>
  
    <ElementsLoader :duration="1000" />
    <ClientOnly>
    <div class="alaa" :class="[$i18n.locale == 'ar' ? 'ar-dir':'en-dir']">
      <SharedNavbar  />
      <slot  />
      <SharedFooter  />
      </div>
    </ClientOnly>
</template>

<script setup>
  // const { data, error, execute } = await useDefaultCurrency().getCurrency();
  // if (error.value ) {
  //      const reAuthorize = async () => useFetch(`${api.AuthLoginApi}`, {
  //   baseURL: apiBase,
  //   method: 'POST',
  //   body: {
  //     email: "Alkhaiala@gmail.com",
  //     password: "admin123",
  //   },
  //   body: {
  //     token: mainToken,
  //     refreshToken: refreshMainToken
  //   },
  //   onResponse({ request, response, options }) {
  //     // Process the response data
  //     if (response._data.successed) {
  //       localStorage.removeItem('mainToken')
  //       localStorage.removeItem('refreshMainToken')
  //       localStorage.setItem('mainToken', response._data.token)
  //       localStorage.setItem('refreshMainToken', response._data.refreshToken);
  //       useMainToken().value = response._data.token
  //       useRefreshMainToken().value = response._data.refreshToken
  //       console.log("********************* done *********************")
  //     }
  //     return response._data
  //   }
  // })
  // }

  // watchEffect(() => {
  //   if (!data.value) execute() 
  // })

</script>

<style></style>