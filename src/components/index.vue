<template>
  <div class="container">
    <!-- 头部 -->
    <div class="header">
      <img src="../assets/images/logo.png" alt="">
      <el-menu class="el-menu-demo" mode="horizontal" 
        background-color="#3a5195" text-color="#fff" >
        <el-submenu index="1">
          <template slot="title">学校概况</template>
          <el-menu-item style="float:left" index="1-1">学校简介</el-menu-item>
          <el-menu-item style="float:left" index="1-2">领导致辞</el-menu-item><br>
          <el-menu-item style="float:left" index="1-3">组织机构</el-menu-item>
          <el-menu-item style="float:left" index="1-4">理念特色</el-menu-item><br>
          <el-menu-item style="float:left;margin-right: 5px;" index="1-5">大 事 记</el-menu-item>
          <el-menu-item style="float:left" index="1-6">领导关怀</el-menu-item><br>
          <el-menu-item style="float:left" index="1-7">校园环境</el-menu-item>
          <el-menu-item style="float:left" index="1-8">影像东软</el-menu-item><br>
          <el-menu-item style="float:left" index="1-9">大学精神</el-menu-item>
          <el-menu-item style="float:left" index="1-10">党群工作</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">学院介绍</el-menu-item>
        <el-menu-item index="3">新闻中心</el-menu-item>
        <el-menu-item index="4">招生就业</el-menu-item>
        <el-menu-item index="5">人才培养</el-menu-item>
        <el-menu-item index="6">服务指南</el-menu-item>
        <el-menu-item index="7">友情链接</el-menu-item>
      </el-menu>
    </div>
    <div class="line"></div>
    <!-- 主体 -->
    <div class="main">
      <div class="main_aside">
        <el-row>
          <el-link :underline="false">学校新闻</el-link>
        </el-row>
        <el-row>
          <el-link :underline="false">通知公告</el-link>
        </el-row>
        <el-row>
          <el-link :underline="false">聚焦东软</el-link>
        </el-row>
        <el-row>
          <el-link :underline="false">信息聚焦</el-link>
        </el-row>
        <el-row>
          <el-link :underline="false">信息公开</el-link>
        </el-row>

      </div>
      <div class="main_content">

        <p style="padding-left:20px;padding-top:-5px">当前位置:新闻中心>>学校新闻</p>

        <div class="school_title">

          <div class="main_line"></div>
          我校开展10月党日活动暨党委书记讲授专题党课活动
        </div>
        <div class="school_date">
          2022年11月2日 编辑：品牌发展部 来源： 图/陈怀宇 文/党群工作部
        </div>
        <div class="school_content">
          近日，我校开展10月党日活动暨党委书记讲授专题党课活动。学校党委书记赖廷谦主讲专题党课，各学院党总支书记、副书记，相关部门负责人及部分师生代表到场聆听。
        </div>
        <img src="../assets/images/one.jpg" alt="">
        <img src="../assets/images/two.jpg" alt="">
        <div class="school_date">
          我校开展10月党日活动暨党委书记讲授专题党课活动
        </div>
        <div class="school_content">
          课堂上，赖廷谦书记以《马克思主义中国化的飞跃——学习习近平新时代中国特色社会主义思想的感想》一诗揭开了此次专题党课活动的序幕，并分别从中国梦、新发展、“五位一体”、“四个全面”、科研创新、城乡一体化、强军兴军、港澳治理、“一带一路”、抗疫大考、反腐斗争方面回顾总结了党的十八大以来党和国家各项事业发生的历史性变革，取得的历史性成就。新时代的十年里，以习近平同志为核心的党中央高举中国特色社会主义伟大旗帜，带领全党全国各族人民进行伟大斗争、建设伟大工程、推进
          <div>伟大事业、实现伟大梦想，推动中华民族伟大复兴进入了全新的发展阶段。</div>
        </div>
        <img src="../assets/images/three.jpg" alt="">
        <div class="school_date">
          赖廷谦书记讲授专题党课
        </div>
        <div class="school_content">
          赖廷谦书记指出，要深刻认识习近平新时代中国特色社会主义思想是马克思主义中国化最新成果，全面贯彻习近平新时代中国特色社会主义思想，深刻领悟“两个确立”的决定性意义，增强“四个意识”、坚定“四个自信”、做到“两个维护”，自觉在思想上政治上行动上同以习近平同志为核心的党中央保持高度一致，做到表里如一、知行合一，始终坚持和发展新时代中国特色社会主义。
        </div>
        <div class="school_content">
          历史照亮未来，征程未有穷期。赖廷谦书记强调，全校师生要坚持以习近平新时代中国特色社会主义思想为指引，切实把思想与行动统一到党的二十大精神上来，深入贯彻落实习近平总书记在党的二十大报告中关于教育强国的重要论述，踔厉奋发，勇毅前行，持续推进学校内涵式高质量发展，不断为学校建设成为一流应用型大学贡献力量。
        </div>
        <div class="author">
          责任编辑:付婷
        </div>
        <img src="../assets/images/four.png" alt="">
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <img src="../assets/images/five.png" alt="" style="padding-top:40px">
      <div class="footer_info">
        <div>投诉举报方式：xf@nsu.edu.cn 、 028-64888000</div>
        <div>地址：四川省 成都市 都江堰市 青城山镇东软大道1号</div>
        <div>邮编：611844</div>
        <div>[蜀ICP备12011972号-2](https://beian.miit.gov.cn/)</div>
        <div>Copyright © 2002-2022 成都东软学院 All Rights Reserved</div>
      </div>
      <!-- 遮罩层 -->
      
      <div class="footer_img">
        <el-row type="flex" justify="space-around" :gutter="15">
          <el-col :span="4" style="padding: 0;">
            <img src="../assets/images/f_contactus.png" alt="">
          </el-col>
          <el-col :span="4" style="padding: 0;position: relative;" class="showwxcode">
            <img src="../assets/images/f_wx.png" alt="">
            <div class="wxcode">
              <img src="../assets/images/wxcode.jpg" alt="" style="width:80px;height:80px">
            </div>
          </el-col>
          <el-col :span="4" style="padding: 0;">
            <img src="../assets/images/f_wb.png" alt="">
          </el-col>
          <el-col :span="4" style="padding: 0;">
            <img src="../assets/images/f_tt.png" alt="">
          </el-col>
          <el-col :span="4" style="padding: 0;">
            <img src="../assets/images/f_jb.png" alt="">
          </el-col>
          <el-col :span="4" style="padding: 0;">
            <img src="../assets/images/f_lz.png" alt="">
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {

    }
  }
}
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  height: 80px;
  background-color: #3a5195;
}

 .grid-content {
   border-radius: 4px;
   min-height: 36px;
 }
img {
  width: 180px;
  height: 60px;
  margin-top: 0.5%;
  margin-right: 5%;
}

.header_title {
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-left: 5%;
}

.title {
  padding-left: 20px;
  min-width: 11%;
}

.line {
  height: 30px;
  background-color: #d3d3d3;
}

.main {
  display: flex;
  justify-content: center;
  margin-top: 25px;
  line-height: 120%;
}

.main_aside {
  height: 350px;
  width: 150px;
  background-color: #3a5195;
  color: #fff;
  padding-left: 30px;
  margin-right: 25px;
}

.main_aside_title {
  background-color: #3a5195;
  padding-top: 15px;
  min-width: 30px;
}

.main_content {
  width: 550px;
}

.school_title {

  color: #3a5195;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
}

.main_content img {
  padding-left: 12%;
}

.main_content {
  width: 680px;
  background-color: #f4f4f4;
}

.main_line {
  width: 100%;
  height: 15px;
  margin-top: 30px;

  border-top: solid #3a5195 5px;
}

.school_date {
  font-size: small;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

.main_content img {
  width: 520px;
  height: 340px;
  background-size: cover;
}

.main_aside {
  min-width: 200px;
}

.main .el-row {
  padding-left: 30px;
  height: 30px;
}

.school_content {
  font-size: small;
  text-indent: 2em;
  /* min-width: 610px; */
  min-width: 605px;
  padding-right: 5%;
  /* width: 90%; */
  padding-left: 5%;
  padding-bottom: 10px;
}

.author {
  padding-left: 78%;
  padding-top: 2%;
  font-size: small;
}

.footer {
  height: 160px;
  background-color: #5c5c5c;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  position: relative;

}

.footer img {
  width: 100px;
  height: 100px;
}

.footer_info {
  color: #fff;
  font-size: small;
  min-width: 400px;
  margin-left: -20px;
  padding-top: 60px
}

.footer_img img {
  height: 30px;
  width: 30px;
}

.footer_img {
  width: 300px;
  min-width: 300px;
  padding-top: 100px;
  margin-left: -10px;
}



.mask {
  display: none;
  position: absolute;
  width: 270px;
  height: 230px;
  background: #5167a3;
}

.title1:hover .mask {
  display: block;
}

.mask div {
  padding-top: 20px;
  padding-left: 30px;
}

.main_aside {
  width: 112px;
  height: 347px;
  margin-left: 20px;
  background-color: #2a468f;
  z-index: 2
}

.main_aside .el-row {
  padding-left: 30px;
  height: 30px;
}

.main_aside .el-row .el-link {
  padding-top: 5px;
  font-size: 16px;
  line-height: 30px;
  color: #fff;
}

.main_aside div:hover {
  background-color: #375cbc;
  transform: translate(-20px);
  line-height: 30px;
  /* padding-top: 1px; */
}

.footer-right {
  width: 325px;
  height: 50px;
  margin: 100px 40px 10px 25px;
}

.footer-right .el-row {
  justify-content: space-around;
}

.footer-right .el-col {
  width: 45px;
  height: 45px;
  padding: 0;
  background-color: transparent;
}

.footer-right img {
  width: 100%;
  height: 100%;
}

.showwxcode:hover .wxcode {
  display: block;
}

.showwxcode:hover {
    filter: drop-shadow(10px 0 0 rgba(0, 0, 0, .9));
}

.wxcode {
  position: absolute;
  left: -20px;
  top: -80px;
  width: 76px;
  height: 76px;
  display: none;
}
.top {
  font-size: small;
}
</style>
