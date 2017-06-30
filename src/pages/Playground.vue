<template>
  <section>
		<div class="cntr-absolute cntr-flex full-width full-height flex-column">
			<div class="header-section">
				<header-bar ></header-bar>
			</div>
			<div class="cntr-flex full-width full-height" >
				<div class="side-bar" >sidebar</div>
				<div class="main-wrap cntr-pt-m">
					<ul class="cntr-row" v-if="newListData.length>0">
						<li  v-for="(item, key) in newListData" class="col-xs-24 col-md-12 col-lg-8" :key="key">
							<new-grid-cell class="x-cntr-m-m" :data="item">
								<ul slot="assist" class="x-cntr-flex font-size-sm assist-wrap justify-between">
									<li>{{item.publish_time | formatTime}}</li>
									<li>{{item.publish_time | formatTime}}</li>
									<li>{{item.publish_time | formatTime}}</li>
									<li>{{item.publish_time | formatTime}}</li>
									<li>{{item.publish_time | formatTime}}</li>
									<!--<li class="col-5 text-left">{{item.source}}</li>
									<li class="col-5 text-right">{{item.comments}}</li>
									<li class="col-5 text-left">{{item.publish_time | formatTime}}</li>
									<li class="col-5 text-right">{{item.comments}}</li>-->
								</ul>
								<div slot="title" @click.stop.prevent="itemTap(item)">{{item.title}}</div>
							</new-grid-cell>
						</li>
					</ul>
					<div v-else>
						no data
					</div>
				</div>
			</div>
		</div>
		<div class="dokodm-go card-wrap">

		</div>
  </section>
</template>

<script>
	import moment from 'moment'
	import * as gear from '@/assets/js/gear.js'
	// import Memo from '@/components/Memo'
	import HeaderBar from '@/components/HeaderBar'
	import NewGridCell from '@/components/NewGridCell'

	export default {
		data () {
			return {
				newListData:[
					{
						"id":"7",
						"uid":"1",
						"title":"proko原版基础素描教程_手绘肖像视频教程3套16Gb",
						"subtitle":"",
						"source":"xx",
						"source_url":"",
						"context":"[img]http://wx3.sinaimg.cn/large/a3225577ly1fcz4o9b2gpj20jg0aygm6.jpg[/img][img]http://wx1.sinaimg.cn/large/a3225577ly1fcz4o9mfyej20p0164ai2.jpg[/img][img]http://wx2.sinaimg.cn/large/a3225577ly1fcz4oa18nsj20jg0nw0x8.jpg[/img][img]http://wx1.sinaimg.cn/large/a3225577ly1fcz4oamzajj20jg0onq7d.jpg[/img] [size=4][color=#ff0000]1、proko素描基础绘画，原版视频教程29课[/color][/size] 每次看到好的美术课程，总是感叹当年上学时的美术课是多么的索然无味。或者感叹这样好的课程为什么才做出来。非常生动有趣的基础课程。帅哥主讲。 L1 如何画嘴唇 How to Draw Lips - Step by Step L2 如何画嘴唇-解剖和结构 How to Draw Lips - Anatomy and...",
						"publish_time":"1498098695"
					},
					{
						"id":"7",
						"uid":"1",
						"title":"proko原版基础素描教程_手绘肖像视频教程3套16Gb",
						"subtitle":"",
						"source":"",
						"source_url":"",
						"context":"[img]http://wx3.sinaimg.cn/large/a3225577ly1fcz4o9b2gpj20jg0aygm6.jpg[/img][img]http://wx1.sinaimg.cn/large/a3225577ly1fcz4o9mfyej20p0164ai2.jpg[/img][img]http://wx2.sinaimg.cn/large/a3225577ly1fcz4oa18nsj20jg0nw0x8.jpg[/img][img]http://wx1.sinaimg.cn/large/a3225577ly1fcz4oamzajj20jg0onq7d.jpg[/img] [size=4][color=#ff0000]1、proko素描基础绘画，原版视频教程29课[/color][/size] 每次看到好的美术课程，总是感叹当年上学时的美术课是多么的索然无味。或者感叹这样好的课程为什么才做出来。非常生动有趣的基础课程。帅哥主讲。 L1 如何画嘴唇 How to Draw Lips - Step by Step L2 如何画嘴唇-解剖和结构 How to Draw Lips - Anatomy and...",
						"publish_time":"1498098695"
					},
					{
						"id":"7",
						"uid":"1",
						"title":"proko原版基础素描教程_手绘肖像视频教程3套16Gb",
						"subtitle":"",
						"source":"",
						"source_url":"",
						"context":"[img]http://wx3.sinaimg.cn/large/a3225577ly1fcz4o9b2gpj20jg0aygm6.jpg[/img][img]http://wx1.sinaimg.cn/large/a3225577ly1fcz4o9mfyej20p0164ai2.jpg[/img][img]http://wx2.sinaimg.cn/large/a3225577ly1fcz4oa18nsj20jg0nw0x8.jpg[/img][img]http://wx1.sinaimg.cn/large/a3225577ly1fcz4oamzajj20jg0onq7d.jpg[/img] [size=4][color=#ff0000]1、proko素描基础绘画，原版视频教程29课[/color][/size] 每次看到好的美术课程，总是感叹当年上学时的美术课是多么的索然无味。或者感叹这样好的课程为什么才做出来。非常生动有趣的基础课程。帅哥主讲。 L1 如何画嘴唇 How to Draw Lips - Step by Step L2 如何画嘴唇-解剖和结构 How to Draw Lips - Anatomy and...",
						"publish_time":"1498098695"
					},
					{
						"id":"7",
						"uid":"1",
						"title":"proko原版基础素描教程_手绘肖像视频教程3套16Gb",
						"subtitle":"",
						"source":"",
						"source_url":"",
						"context":"[img]http://wx3.sinaimg.cn/large/a3225577ly1fcz4o9b2gpj20jg0aygm6.jpg[/img][img]http://wx1.sinaimg.cn/large/a3225577ly1fcz4o9mfyej20p0164ai2.jpg[/img][img]http://wx2.sinaimg.cn/large/a3225577ly1fcz4oa18nsj20jg0nw0x8.jpg[/img][img]http://wx1.sinaimg.cn/large/a3225577ly1fcz4oamzajj20jg0onq7d.jpg[/img] [size=4][color=#ff0000]1、proko素描基础绘画，原版视频教程29课[/color][/size] 每次看到好的美术课程，总是感叹当年上学时的美术课是多么的索然无味。或者感叹这样好的课程为什么才做出来。非常生动有趣的基础课程。帅哥主讲。 L1 如何画嘴唇 How to Draw Lips - Step by Step L2 如何画嘴唇-解剖和结构 How to Draw Lips - Anatomy and...",
						"publish_time":"1498098695"
					}
				],
				psize:10,
				pnum:1
			}
		},
		filters:{
			formatTime(value, params){
				return moment(value*1000).format('YYYY-MM-DD');
			}
		},
		components:{
			HeaderBar,
			NewGridCell
		},
		mounted(){
			// this.loadNewsList({
			// 	psize:this.psize,
			// 	pnum:this.pnum
			// });
		},
		methods:{
			itemTap(_item){
				this.$router.push({
					name:'news-detail',
					params:{
						itemId:_item.id
					}
				})
			},
			loadNewsList(_data){
				this.$rahttp.get('/Article',{
					data:_data
				})
				.then((res)=>{
					console.dir(res);
					if(res.status === 200){
						this.newListData = [...this.newListData, ...res.body.data];
					}else{
						this.$memo.info(decodeURI(res.headers['x-tips']))
					}
				},(error)=>{
					this.$memo.danger(decodeURI(res.headers['x-tips']))
				})
			}
		}
	}
</script>

<style scoped>
	.main-wrap{
		flex-grow:1;
		
	}
	.dokodm-go{
		position:fixed;
		bottom:1rem;
		right:1rem;
		padding:1rem;
		border-radius:50%;
		/*background:#edd;*/
		z-index:100;
	}
	.side-bar{
		min-width:320px;
		max-width:320px;
	}
	.assist-wrap{
		display:grid;
		grid-template-columns:1fr 1fr;
	}
	@media all and (min-width:678px){
		.main-wrap{
			padding-right:.5rem;
		}
	}
	@media all and (max-width:678px){
		.side-bar{
			display: none;
		}
	}
</style>
