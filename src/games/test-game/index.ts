import { GameEngine } from '../../engine/GameEngine';

export class TestGame extends GameEngine {
  private color = '#ff6600';

  init() {
    this.color = '#ff6600';
  }

  update(dt: number) {
    // game logic
  }

  render() {
    const ctx = this.ctx;
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.fillStyle = '#fff';
    ctx.font = '48px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Test Game', this.width / 2, this.height / 2);
  }

  serialize() { return { color: this.color }; }
  deserialize(s: any) { this.color = s.color; }
}
