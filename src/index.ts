import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
// Images
import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';
// Level and Colors
import {
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY
} from './setup';
// Helpers
import { createBricks } from './helpers';

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
    view.drawInfo('YOU LOSE! 🙈');
    gameOver = false;
}

function setGameWon(view: CanvasView) {
    view.drawInfo('YOU WON! 🎉');
    gameOver = false;
}

function gameLoop(
    view: CanvasView,
    bricks: Brick[],
    paddle: Paddle,
    // ball: Ball
) {
    view.clear();
    view.drawBricks(bricks);
    view.drawSprite(paddle);

    // Preserve the paddle from moving outside of the canvas
    if (
        (paddle.isMovingLeft && paddle.pos.x > 0) ||
        (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
    ) {
        paddle.movePaddle()
    }

    requestAnimationFrame(() => {gameLoop(view, bricks, paddle)});
}

function startGame(view: CanvasView) {
    // Reset displays
    score = 0;
    view.drawInfo('');
    view.drawScore(0);
    // Create all bricks 
    const bricks = createBricks();

    const paddle = new Paddle(
        PADDLE_SPEED,
        PADDLE_WIDTH,
        PADDLE_HEIGHT,
        {
            x: PADDLE_STARTX,
            y: view.canvas.height - PADDLE_HEIGHT - 5
        },
        PADDLE_IMAGE
    )

    gameLoop(view, bricks, paddle);
}

// Create a new view
const view = new CanvasView('#playField');
view.initStartButton(startGame);