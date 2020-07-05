<template>

</template>
<script>
export default {
created()
{
  localStorage.removeItem('token')
  localStorage.removeItem('user')
     Toast.fire({
        icon: 'success',
        title: 'Successfully logged out'
      })
      this.$router.push({name: '/'})
}
}

</script>