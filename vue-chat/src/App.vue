<template>
  <div id="app">
    <JwChat-index :config="config" :showRightBox='false' scrollType="noroll"
:taleList="taleList" @enter="bindEnter" @clickTalk="talkEvent" 
 v-model="inputMsg" :toolConfig="tool" :winBarConfig="winBarConfig" width="70%" height="70%"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputMsg: '',
      taleList: [
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "起床不" },
          "mine": false,
          "name": "留恋人间不羡仙",
          "img": "../image/one.jpeg"
        },
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "<audio data-src='https://www.w3school.com.cn/i/horse.mp3'/>" },
          "mine": false,
          "name": "只盼流星不盼雨",
          "img": "../image/two.jpeg"
        },
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "<img data-src='../image/three.jpeg'/>" },
          "mine": false,
          "name": "只盼流星不盼雨",
          "img": "../image/two.jpeg"
        },
        {
          "date": "2020/04/16 21:19:07",
          "text": { "text": "<video data-src='https://www.w3school.com.cn/i/movie.mp4' controls='controls' />" },
          "mine": true,
          "name": "JwChat",
          "img": "../image/three.jpeg"
        },
        {
          "date": "2021/03/02 13:14:21",
          "mine": false,
          "name": "留恋人间不羡仙",
          "img": "../image/one.jpeg",
          "text": {
            system: {
              title: '在接入人工前，智能助手将为您首次应答。',
              subtitle: '猜您想问:',
              content: [
                {
                  id: `system1`,
                  text: '组件如何使用'
                },
                {
                  id: `system2`,
                  text: '组件参数在哪里查看'
                },
                {
                  id: 'system',
                  text: '我可不可把组件用在商业'
                }
              ]
            }
          }
        }
      ],
      tool: {
        // show: ['file', 'history', 'img', ['文件1', '', '美图']],
        // showEmoji: false,
        callback: this.toolEvent
      },
      config: {
        img: '../image/cover.png',
        name: 'JwChat',
        dept: '最简单、最便捷',
        callback: this.bindCover,
        historyConfig:{
          show: true,
          tip: '加载更多',
          callback: this.bindLoadHistory,
        },
        quickList: [
          {text: '这里是jwchat，您想了解什么问题。'},
          {text: 'jwchat是最好的聊天组件'},
          {text: '谁将烟焚散，散了纵横的牵绊；听弦断，断那三千痴缠。'},
          {text: '长夏逝去。山野间的初秋悄然涉足。'},
          {text: '江南风骨，天水成碧，天教心愿与身违。'},
          {text: '总在不经意的年生。回首彼岸。纵然发现光景绵长。'},
          {text: '外面的烟花奋力的燃着，屋里的人激情的说着情话'},
          {text: '假如你是云，我就是雨，一生相伴，风风雨雨；'},
          {text: '即使泪水在眼中打转，我依旧可以笑的很美，这是你学不来的坚强。'},
          {text: ' 因为不知来生来世会不会遇到你，所以今生今世我会加倍爱你。'},
        ]
      },
      winBarConfig: {
        active: 'win00',
        width: '160px',
        listHeight: '60px',
        list: [ {
          id: 'win00',
          img: '..//image/cover.png',
          name: 'JwChat',
          dept: '最简单、最便捷',
          readNum: 99
        },
        {
          id: 'win01',
          img: '..//image/three.jpeg',
          name: '阳光明媚爱万物',
          dept: '沙拉黑油',
          readNum: 12
        },
        {
          id: 'win02',
          img: '..//image/two.jpeg',
          name: '只盼流星不盼雨',
          dept: '最后说的话'
        },
        {
          id: 'win03',
          img: '..//image/one.jpeg',
          name: '留恋人间不羡仙',
          dept: '这里可以放万物'
        },
        {
          id: 'win04',
          img: '..//image/three.jpeg',
          name: '阳光明媚爱万物',
          dept: '官方客服'
        }],
        callback: this.bindWinBar,

      },
      list: []
    }
  },
  methods: {
    bindEnter () {
      const msg = this.inputMsg
      if (!msg) return;
      const msgObj = {
        "date": "2020/05/20 23:19:07",
        "text": { "text": msg },
        "mine": true,
        "name": "JwChat",
        "img": "../image/three.jpeg"
      }
      console.log(msgObj)
      this.taleList.push(msgObj)
    },
    /**
     * @description: 
     * @param {*} type 当前点击的按钮
     * @param {*} plyload 附加文件或者需要处理的数据
     * @return {*}
     */
    toolEvent (type, plyload) {
      console.log('tools', type, plyload)
    },
     /**
     * @description: 点击加载更多的回调函数
     * @param {*}
     * @return {*}
     */
    bindLoadHistory () {
      const history = new Array(3).fill().map((i, j) => {
        return {
          "date": "2020/05/20 23:19:07",
          "text": { "text": j + new Date() },
          "mine": false,
          "name": "JwChat",
          "img": "image/three.jpeg"
        }
      })
      let list = history.concat(this.list)
      this.list = list
      console.log('加载历史', list, history)
    },
    bindCover (type) {
      console.log('header', type)
    },
    bindWinBar (play = {}) {
      const {type, data={}} = play
      console.log(data);
      if(type==='winBar'){
        const { id, dept, name, img } = data
        console.log(dept, name, img)
        this.winBarConfig.active = id
      }
    },
    talkEvent() {

    }
  }
}
</script>
<style>
  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
  }
</style>