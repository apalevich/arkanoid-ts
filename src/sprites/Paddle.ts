import { Vector } from "~/types";

export class Paddle {
    private paddleImage: HTMLImageElement = new Image();
    private moveLeft: boolean = false;
    private moveRight: boolean = false;

    constructor(
        private speed: number,
        private paddleWidth: number,
        private paddleHeight: number,
        private position: Vector,
        image: string
    ) {
        this.speed = speed;
        this.paddleWidth = paddleWidth;
        this.paddleHeight = paddleHeight;
        this.position = position;
        this.moveLeft = false;
        this.moveRight = false;
        this.paddleImage.src = image;
    }

    get width(): number { return this.paddleWidth };
    get height(): number { return this.paddleHeight };
    get pos(): Vector { return this.position };
    get image(): HTMLImageElement { return this.image };
    get isMovingLeft(): boolean { return this.moveLeft };
    get isMovingRight(): boolean { return this.moveRight };
}