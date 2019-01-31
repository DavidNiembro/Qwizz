<template>
<nav class="navbar navbar-expand-md navbar-light justify-content-between" >
      <a class="navbar-brand" href="/"><h2 class="brand">Qwizz</h2></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ">
          <li v-if="token" class="nav-item active">
            <a class="nav-link" href="/"><div class="link">Home</div> <span class="sr-only">(current)</span></a>
          </li>
          <li v-if="!token" class="nav-item">
            <a class="nav-link" href="/login"><div class="link">Se connecter</div></a>
          </li>
          <li v-if="!token" class="nav-item">
            <a class="nav-link" href="/register"><div class="link">S'enregistrer</div></a>
          </li>
          <li v-if="token" class="nav-item">
            <form>
              <button class="nav-link buttonLogout" v-on:click="logout()" ><div class="link">Logout</div></button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
    methods: {
        logout: function () {
            this.$store.dispatch('LOGOUT')
            this.$router.push('/');
        }
    },
    data () {
    return {
      token:null
    }
  },
  mounted () {
    this.token = localStorage.getItem('token');
  }
}
</script>
<style>
.buttonLogout{
  background-color: transparent;
  border: 0px;
  cursor:pointer;
}
.navbar{
    background: #df091d;

}
.brand{
    color: #FFFFFF;
}
.link{
    color: #FFFFFF;
}
.navbar-light .navbar-toggler{
  border-color:rgba(0,0,0,0)
}
</style>
