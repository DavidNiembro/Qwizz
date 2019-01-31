<template>
    <div>
        <Header/>
        <div class="container">
            <h1 class="m-5" style="fontSize:50px;text-align: center">Résultats</h1>
            <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                  <h3>Vous avez <span style="color:red">{{right}}</span> réponse juste sur {{all}}</h3>
                                  <h3>Vous avez donc {{right/all*100}} % de réussite</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
             <div class="row" style="paddingTop:20px">
                <div class="col-7"></div>
                <div class="col-3"><a href="/" class="buttonRetour">Retourner à la home</a></div>
                <div class="col-2"></div>
            </div>
        </div>   
</template>
<script>
import Header from '../Header.vue';
export default {
    name: 'results',
    components:{
      Header
    },
    data () {
    return {
      right:0,
      all:0,
    }
    },
    computed : {
        results(){
            return this.$store.getters.RESULTS 
        }
    },
    created() {

        if(this.results.length < 1){
            this.$router.push('/');
        }
        
        this.all = this.results.length
        this.results.forEach(result => {
            if(result.response){
                this.right = this.right + 1
            }
        });
        
    }
}
</script>
<style>
.buttonRetour {
    background-color: red;
    color:white;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
}
.buttonRetour:hover {
    background-color: white;
    color:red;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border:1px solid red;
    text-decoration: none;
    cursor: pointer;

}
</style>
