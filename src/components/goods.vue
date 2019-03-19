<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <!--<v-prodetails @click="selectFood"></v-prodetails>-->
    <div class="doctors">
      <div class="menu-wrapper">
        <ul>
          <li v-for="(dept,index) in depts" :key="index">
            <span>{{dept.name}}</span>
          </li>
        </ul>
      </div>
      <div class="doctor-wrapper">
        <ul>
          <li v-for="(doctor,index) in doctors" :key="index">
            <img class="doctor-avatar" :src="doctor.img" alt=""/>
            <div class="doctor-div">
              <div>{{doctor.name}}医生</div>
              <div>
                <span class="doc-dept">{{doctor.dept}}</span>
                <span class="doc-category">{{doctor.dept}}</span>
              </div>
            </div>

            <div>
              <span>预约金:</span>
              <span>{{doctor.money}}</span>
              <span>第二诊疗金:</span>
              <span>{{doctor.money}}</span>
            </div>
            <div>{{doctor.sepelice}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  /*引入商品详情组件文件*/
  //  import prodetails from './prodetails.vue'
  export default{
    data()
  {
    return {
      depts: [
        {id: 1, name: '临床肿瘤科'},
        {id: 2, name: '妇科及妇产科'},
        {id: 3, name: '临床肿瘤科'},
        {id: 4, name: '泌尿外科'},
        {id: 5, name: '前列腺外科'}
      ],
      doctors: [
        {
          id: 1,
          name: '陈奕迅',
          dept: '外科',
          money: 100,
          sepelice: '从事外科20年丰富的男性前列腺疾病，医学博士生导师……',
          img: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114'
        },
        {
          id: 2,
          name: '陈奕迅',
          dept: '外科',
          money: 100,
          sepelice: '从事外科20年丰富的男性前列腺疾病，医学博士生导师……',
          img: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114'
        },
        {
          id: 3,
          name: '陈奕迅',
          dept: '外科',
          money: 100,
          sepelice: '从事外科20年丰富的男性前列腺疾病，医学博士生导师……',
          img: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114'
        },
        {
          id: 4,
          name: '陈奕迅',
          dept: '外科',
          money: 100,
          sepelice: '从事外科20年丰富的男性前列腺疾病，医学博士生导师……',
          img: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114'
        }
      ]
    }
  }
  /*   props: {
   foods: {
   type: object
   }
   },
   data(){
   return {
   foods: [
   {
   'name': '香港13价肺炎疫苗',
   'address': '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
   'tel': 4008831114
   },
   {
   'name': '香港安生医疗中心',
   'address': '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
   'tel': 411111111
   }
   ]
   }
   },*/
  /*注册商品详情文件组件*/
  /*  components: {
   'v-prodetails': prodetails
   }*/
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .doctors {
    display: flex;
  }

  .menu-wrapper {
    flex: 0 0 100px;
    background-color: #FBFBFB;
  }

  .menu-wrapper ul {
    margin: 0 0 0 -40%;
  }

  .doctor-wrapper ul {
    margin: 0 0 0 -14%;
  }

  .menu-wrapper li {
    width: 100%;
    line-height: 40px;
  }

  .menu-wrapper li:not(:last-child) {
    border-bottom: 1px solid #FBFBFB;
  }

  .doctor-wrapper {
    flex: 1;
    background-color: #f0f0f0;
  }

  .doctor-wrapper li {
    border-bottom: 1px solid #F8F8F8;
    text-align: left;
    padding: 10px 8px;
  }

  .doctor-avatar {
    width: 14%;
    border-radius: 100%;
  }
.doctor-div{
  display: inline-block;
}
  .doc-dept {
    padding: 2px 12px;
    background-color: #06C7C5;
    color: #fff;
    border-radius: 7px;
    font-size: 10px;
  }

  .doc-category {
    padding: 2px 12px;
    background-color: #2EA9E2;
    color: #fff;
    border-radius: 7px;
    font-size: 10px;
  }
</style>
