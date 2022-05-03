import React from 'react'
import { render } from 'react-dom'

const html = (
  <div>
    <h2>bonjour</h2>

    <h2>on a réussi </h2>

    <p> c'est sur qu'on a réussi </p>
  </div>
)

const div = document.querySelector('#root')

render(html, div)
