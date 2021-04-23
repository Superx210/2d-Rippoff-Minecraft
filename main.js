var canvas = new fabric.Canvas('myCanvas');
ctx = canvas.getContext("2d");
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png",
        function(Img) {
            player_object = Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(140);
            player_object.set({
                top: player_y,
                left: player_x
            });
            canvas.add(player_object);
        });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image,

        function(Img) {
            block_object = Img;
            block_object.scaleToWidth(block_image_width);
            block_object.scaleToHeight(block_image_height);
            block_object.set({
                top: player_y,
                left: player_x
            });
            canvas.add(block_object);
        });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width"), innerHTML = block_image_width;
        document.getElementById("current_height"), innerHTML = block_image_height;
    }
    if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");

    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '81') {
        new_image('cloud.jpg');
        console.log("q");
    }
    if (keyPressed == '87') {
        new_image('dark_green.png');
        console.log("w");
    }
    if (keyPressed == '69') {
        new_image('Diamond.png');
        console.log("e");
    }
    if (keyPressed == '82') {
        new_image('Gold.png');
        console.log("r");
    }
    if (keyPressed == '84') {
        new_image('ground.png');
        console.log("t");
    }
    if (keyPressed == '89') {
        new_image('Iron.png');
        console.log("y");
    }
    if (keyPressed == '85') {
        new_image('light_green.png');
        console.log("u");
    }
    if (keyPressed == '73') {
        new_image('Obsidian.png');
        console.log("i");
    }
    if (keyPressed == '79') {
        new_image('Redstone.png');
        console.log("o");
    }
    if (keyPressed == '72') {
        new_image('roof.jpg');
        console.log("h");
    }
    if (keyPressed == '65') {
        new_image('TNT.png');
        console.log("a");
    }
    if (keyPressed == '83') {
        new_image('trunk.jpg');
        console.log("s");
    }
    if (keyPressed == '68') {
        new_image('unique.png');
        console.log("d");
    }
    if (keyPressed == '70') {
        new_image('wall.jpg');
        console.log("f");
    }
    if (keyPressed == '71') {
        new_image('yellow_wall.png');
        console.log("g");
    }


}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("block image height=" + block_image_height);
        console.log("When Up arrow key is pressed,X=" + player_x + ",Y=" + player_y);
        canvas.remove(player_object);
        player_update()
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("block image height=" + block_image_height);
        console.log("When Down arrow key is pressed,X=" + player_x + ",Y=" + player_y);
        canvas.remove(player_object);
        player_update()
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_image_width;
        console.log("block image width=" + block_image_width);
        console.log("When Down arrow key is pressed,X=" + player_x + ",Y=" + player_y);
        canvas.remove(player_object);
        player_update()
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log("block image width=" + block_image_width);
        console.log("When Down arrow key is pressed,X=" + player_x + ",Y=" + player_y);
        canvas.remove(player_object);
        player_update()
    }
}