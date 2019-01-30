<template>
<nav class="navbar navbar-expand-md navbar-light justify-content-between" >
      <a class="navbar-brand" href="/"><h2 class="brand">Qwizz</h2></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ">
          <li class="nav-item active">
            <a class="nav-link" href="/"><div class="link">Home</div> <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login"><div class="link">Login</div></a>
          </li>
        </ul>
      </div>
    </nav>
</template>
<style>
.navbar{
    background: #df091d;

}
.brand{
    color: #FFFFFF;
}
.link{
    color: #FFFFFF;
}
</style>
