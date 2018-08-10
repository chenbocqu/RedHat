class GamePage extends eui.Component implements  eui.UIComponent {

	public sc_cloud:eui.Scroller;
	public gp_cloud:eui.Group;
	public btn_return:eui.Button;
	public btn_left:eui.Button;
	public btn_up:eui.Button;
	public btn_right:eui.Button;


    private static shared:GamePage;
    public static getInstance(){
        if( !GamePage.shared){
            GamePage.shared =  new GamePage();
        }
        return GamePage.shared;
    }

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
	
	// 自定义初始化函数
	private init() {
		// 给每个按钮绑定点击事件
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.returnClick,this)
		this.btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP,this.leftClick,this)
		this.btn_up.addEventListener(egret.TouchEvent.TOUCH_TAP,this.upClick,this)
		this.btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rightClick,this)

		// scroller  关闭水平方向滚动
		this.sc_cloud.scrollPolicyH = eui.ScrollPolicy.OFF;
		//20行*10列
		// let col = 10;
		// let row = 20;
		// let icon_width = this.width / col;
		// let icon_height = this.height / row;

		//创建icon的group添加到scroller上
		let group:eui.Group = new eui.Group();
		this.gp_cloud.addChild(group);
		group.width = 640;
		// 每个icon的高度 * 总关卡数
		// group.height = icon_height * LevelDataManager.getInstance().totalLevels;
		// group.height = ;

		// 填充背景图
		for( let i:number = 0; i < 2; i++){
			let img_bg:eui.Image = new eui.Image("resource/assets/RedHat/bg.png");
			img_bg.y = i * this.height ;
			this.gp_cloud.addChildAt( img_bg,0);
		}
	}

	private returnClick() {
		this.parent.removeChild(this);
	}
	private leftClick() {
		console.log("向左")
	}
	private upClick() {
		console.log("向上")
	}
	private rightClick() {
		console.log("向右")
	}
}