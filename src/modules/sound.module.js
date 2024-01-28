import { Module } from '../core/module'
import { random } from '../utils'

export class SoundModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    this.playRandomSound()
  }

  playRandomSound() {
    this.container = document.querySelector('.container')
    let context = new AudioContext()
    const waveforms = ['sine', 'square', 'sawtooth', 'triangle']

    let oscillatorNode = context.createOscillator()
    let gainNode = context.createGain()

    oscillatorNode.type = waveforms[random(0, waveforms.length)]

    let frequency = random(100, 10100).toFixed(2)
    oscillatorNode.frequency.value = frequency

    gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
    oscillatorNode.connect(gainNode)
    gainNode.connect(context.destination)
    oscillatorNode.start(0)

    this.container.classList.remove('sound')
  }
}
