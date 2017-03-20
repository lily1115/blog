<template>
  <div class="user">
    <ul>
      <li class="panel nickname">
        <router-link to='/changeNick'>
          <span class="icon-ic_name"></span>
          <span class="title">昵称修改</span>
          <span class="name">{{ nickName }}</span>
          <span class="icon-ic_go"></span>
        </router-link>
      </li>
      <li class="panel psw">
        <router-link to='/changePsw'>
          <span class="icon-ic_psw"></span>
          <span class="title">密码修改</span>
          <span class="icon-ic_go"></span>
        </router-link>
      </li>
    </ul>
      <!-- <x-button type="primary">primary</x-button> -->
  </div>

</template>

<script>
  import axios from 'axios'
  // import { axios, vux } from '../../js/base'
  // import { xButton } from 'vux'
  export default {
    data () {
      return {
        nickName: 'MICHCLE'
      }
    },
    mounted () {
      // this.$nextTick(() => {
      //   this.getNick()
      // })
    },
    methods: {
      getNick () {
        axios.post(`${this.httpRoot}/user/getNick`)
        .then(res => {
          if (res.status === 200) {
            console.log('dddd')
            this.nickName = res.avatarImg
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
// .user{
//     margin: 10px 0 0 0;
//     width: 100%;
//     height: 100px;
//     .panel{
//       position: relative;
//       background: #fff;
//       width: 100%;
//       height: 50px;
//       border-bottom: 1px solid #f1f1f1;
//       span{
//         position: absolute;
//         top: 12px;
//         &.icon{
//           left: 12px;
//           img{
//             width: 20px;
//             height: 20px;
//           }
//         }
//         &.title{
//           left: 52px;
//           vertical-align: top;
//           margin-top: 2px;
//           color: #4d4d4d;
//         }
//         &.name{
//           right: 32px;
//           vertical-align: top;
//           color: #777;
//         }
//         &.rightIcon{
//           right: 12px;
//           img{
//             width: 10px;
//           }
//         }
//       }
//     }  
// }

</style>