import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import login from './components/login.vue'
import Hread from './components/hread-nologin.vue'
import loginHread from './components/hread-login.vue'
import index from './components/index.vue'
import indexlogin from './components/index-login.vue'
import details from './components/details.vue'
import detailslogin from './components/details-login.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import ShoppingCartlogin from './components/ShoppingCart-login.vue'
import BackgroundHome from './components/BackgroundHome.vue'
import Commoditymanagement from './components/Commoditymanagement.vue'
import Commentmanagement from './components/Commentmanagement.vue'
import Usermanagement from './components/Usermanagement.vue'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new VueRouter({
	scrollBehavior: () => ({ x: 0 }),
	routes:[
		 {path:'/',component:login},
		 {path:'/Hread',component:Hread,children:[
			 {path:'/index',components:{
			  		"header":index
			  }},
			 {path:'/details/:id',components:{
			   		"header":details
			  }},
			 {path:'/ShoppingCart',components:{
			    	"header":ShoppingCart
			  }},			  
		 ] },
		 {path:'/loginHread',component:loginHread,children:[
			 {path:'/indexlogin/:username',components:{
				  "loginheader":indexlogin
			 }},
			 {path:'/detailslogin/:username/:id',components:{
			   	  "loginheader":detailslogin
			  }},
			 {path:'/ShoppingCartlogin/:username',components:{
			      "loginheader":ShoppingCartlogin
			  }}, 
			 
		 ]
		 },
		 
		  {path:'/BackgroundHome',component:BackgroundHome,children:[
			  {path:'/Commoditymanagement',components:{
				  "children":Commoditymanagement
			  }},
			  {path:'/Commentmanagement',components:{
			  	  "children":Commentmanagement
			  }},
			  {path:'/Usermanagement',components:{
				  "children":Usermanagement
			  }}
			  
			  
		  ]}
		  
	]
})