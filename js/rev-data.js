class RevData{
    static w=8;
    static h=8;
    static x=0;
    static y=0;
    static blank=8;
    constructor(){
        this.player=0;
        this.isEnd=false;
        this.scores=[2,2];
        this.types=["MAN","COM"];
        this.board=[
            [8,8,8,8,8,8,8,8],
            [8,8,8,8,8,8,8,8],
            [8,8,8,8,8,8,8,8],
            [8,8,8,1,0,8,8,8],
            [8,8,8,0,1,8,8,8],
            [8,8,8,8,8,8,8,8],
            [8,8,8,8,8,8,8,8],
            [8,8,8,8,8,8,8,8]
        ];
        this.putToken={x:0,y:0};
        this.activeSquares=[];
        this.revToekns=[];
    }
}

