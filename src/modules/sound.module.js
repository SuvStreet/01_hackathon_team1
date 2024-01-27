import { Module } from '../core/module'
import { random } from '../utils'

export class SoundModule extends Module {
  trigger() {
    this.playRandomSound()
  }

  playRandomSound() {
    let context = new AudioContext()
    const waveforms = ['sine', 'square', 'sawtooth', 'triangle']

    // if (context === null) {
    //   context = new AudioContext()
    // }

    let oscillatorNode = context.createOscillator()
    let gainNode = context.createGain()

    oscillatorNode.type = waveforms[random(0, waveforms.length)]
    console.log('oscillatorNode.type', oscillatorNode.type)

    let frequency = random(100, 10100).toFixed(2)
    oscillatorNode.frequency.value = frequency

    gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
    oscillatorNode.connect(gainNode)
    gainNode.connect(context.destination)
    oscillatorNode.start(0)
  }
}
