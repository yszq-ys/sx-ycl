import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    goods:[],
    type:0,
    status:'all',
    cartData:[],

    totalMount:0,
    totalPrice:0,
    editBoo:true,


  },
  mutations:{
    SET_GOODS(state,data){
      state.goods=data;
    },
    SET_TYPE(state,type){
      state.type=type
    },
    SET_STATUS(state,status){
      state.status=status;
    },
    // 加入购物车
    SET_CART(state,item){
      const {id,name,img,stock,price,_type}=item;
      const index = state.cartData.findIndex(item=>item.id==id);
      if(index==-1){
        state.cartData.push({
          id,name,img,stock,price,
          mount:1,
          tPrice:price,
          select:false
        })
      }else{
        if(_type=='PLUS'){
          state.cartData[index].mount+=1;
          state.cartData[index].tPrice+=price;
        }else if(_type=="REDUCE"){
          if(state.cartData[index].mount>1){
            state.cartData[index].mount-=1;
            state.cartData[index].tPrice-=price;
          }else{
            alert("商品不能再减少了")
          }
        }
      }

      localStorage.setItem('cartData',JSON.stringify(state.cartData))

    },
    // 请求购物车的数据
    SET_CART_DATA(state,data){
      const {cartData,totalMount,totalPrice}=data;
      state.cartData=cartData;
      state.totalMount=totalMount;
      state.totalPrice=totalPrice;
    },
    // DELETE_CART_DATA(state){
    //   state.cartData=state.cartData.filter(item=>!item.select)
    // }

    // 选中
    SET_SELECT(state,id){
      state.cartData.map(item=>{
        if(item.id==id){
          item.select=!item.select;
        }
      });

      localStorage.setItem('cartData',JSON.stringify(state.cartData))
    },

    // 总数量 总价钱
    SET_TOTAL(state,data){
      const {select,tPrice,mount}=data;
      if(select){
        state.totalPrice+=tPrice;
        state.totalMount+=mount;
      }else{
        state.totalPrice-=tPrice;
        state.totalMount-=mount;
      }
      localStorage.setItem('totalPrice',state.totalPrice);
      localStorage.setItem('totalMount',state.totalMount);
    },

    SET_SELECT_ALL(state,boo){
      if(boo){
        state.totalMount=0;
        state.totalPrice=0;
        state.cartData.map(item=>{
          item.select=true;
          state.totalMount+=item.mount;
          state.totalPrice+=item.tPrice;
        })
      }else{
        state.cartData.map(item=>{
          item.select=false;
          state.totalMount=0;
          state.totalPrice=0;
        })
      }

      localStorage.setItem('totalPrice',state.totalPrice);
      localStorage.setItem('totalMount',state.totalMount);
      localStorage.setItem('cartData',JSON.stringify(state.cartData))

    },

    SET_EDIT_BOO(state,boo){
      state.editBoo=boo
    },

    // 删除数据
    DELETE_DATA(state){
      state.cartData=state.cartData.filter(item=>!item.select);
      state.totalMount=0;
      state.totalPrice=0;

      
      localStorage.setItem('totalPrice',state.totalPrice);
      localStorage.setItem('totalMount',state.totalMount);
      localStorage.setItem('cartData',JSON.stringify(state.cartData))
    }
  },
  actions:{
    setGoods({commit}){
      const goods=JSON.parse(localStorage.getItem('goods'))||[]
      commit('SET_GOODS',goods)
    },
    setType({commit},type){
      commit('SET_TYPE',type)
    },
    setStatus({commit},status){
      commit('SET_STATUS',status)
    },
    setCart({commit},data){
      commit('SET_CART',data)
    },
    setCartData({commit}){
      const cartData=JSON.parse(localStorage.getItem('cartData'))||[];
      const totalPrice=JSON.parse(localStorage.getItem('totalPrice'))||0;
      const totalMount=JSON.parse(localStorage.getItem('totalMount'))||0;
      commit('SET_CART_DATA',{
        cartData,
        totalPrice,
        totalMount
      })
    },
    setSelect({commit},id){
      commit('SET_SELECT',id)
    },
    setTotal({commit},data){
      commit('SET_TOTAL',data)
    },
    setSelectAll({commit},boo){
      commit('SET_SELECT_ALL',boo);
    },
    setEditBoo({commit},boo){
      commit('SET_EDIT_BOO',boo)
    },
    delectData({commit}){
      commit('DELETE_DATA')
    }
  }
})  