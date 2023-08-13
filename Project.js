var B37EUN = function(){
	var array = [];
    
    /**
     * @param map matrix with the racetrack map[i][j] 
     * @param playerData information about the players
     * @param selfIdx index of the actual player
     */
	this.init = function(map, playerData, selfIdx){
        var open_list = [];
        console.log(map)
        for (var i = 0; i < map.length; i++) {
            var arr_tmp = Array(map[1].length).fill(-1);
            array.push(arr_tmp);

            if(map[i].includes(100)){
                for(var j = 0; j < map[i].length; j++){
                    if(map[i][j] == 100){
                        array[i][j] = 0;
                        open_list.push({x:i, y:j});
                    }
                }
            }
        }

        while(open_list.length != 0){
            var prev = open_list.shift();
            for(var i=-1; i<=1; i++){
				for(var j=-1; j<=1; j++){ //!(i == 0 && j == 0) &&
                    if(!(map[prev.x+i][prev.y+j] == -1 ) && array[prev.x+i][prev.y+j] == -1){
                        array[prev.x+i][prev.y+j] = array[prev.x][prev.y] + 1;
                        open_list.push({x:prev.x+i, y:prev.y+j});
                    }
                }
            }
        }    
	}
	
	this.moveFunction = function(map, playerData, selfIdx){
		var self = playerData[selfIdx]; 
		var newCenter = { 
			x: self.pos.x+(self.pos.x-self.oldpos.x),
			y: self.pos.y+(self.pos.y-self.oldpos.y)
		};
		var nextMove = newCenter; //the place in the maze where we would go next
        var movement = {x:0,y:0};

        for(var i=-1; i<=1; i++){
			for(var j=-1; j<=1; j++){
                new_tmp = {x: newCenter.x + i, y: newCenter.y + j}; //this may be the next
                if(!lc.equalPoints(new_tmp,self.pos) && lc.validLine(self.pos, new_tmp)
                 && lc.playerAt(new_tmp) < 0 && (array[new_tmp.x][new_tmp.y] != -1) 
                 && ((array[new_tmp.x][new_tmp.y] < array[nextMove.x][nextMove.y]) || nextMove == newCenter)){
                    
                    nextMove = new_tmp;
                    movement = {x:i,y:j};
                }
            }
        }

        return movement;
		
	}
}