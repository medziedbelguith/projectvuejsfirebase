<template>
    <div class="container">
        <br>
        <br>
        <form @submit.prevent="loginUser">
            <div class="mb-3">
                <label>Email address</label>
                <input type="email" class="form-control"  v-model="user.email">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" v-model="user.password">
            </div>
            <div class="alert alert-danger" v-if="messageErr">{{messageErr}}</div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'
export default {
    name:'Signin',
    data(){
        return{
          user:{
            email:'',
            password:''
          },
          messageErr:''
        }
    },
    methods:{
        loginUser()
        {
        firebase.auth().signInWithEmailAndPassword(this.user.email,this.user.password).then((dataUser)=>{
            localStorage.setItem("uidUser",dataUser.user.uid)
            router.push({
                name:'Home'
            })

        }).catch(()=>{
           this.messageErr='invalid email and password'
        })
        }
    }
}
</script>
