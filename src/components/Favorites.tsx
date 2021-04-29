import React from 'react'
import { SongList } from './SongList'
import { layoutParams } from '../schemes/layoutParams.type'
import NavContainer from './NavContainer'
import { TemplateLayout } from './TemplateLayout'

const Favorites = (props: layoutParams) => (
  <>
    <NavContainer />
    { props.favoriteSongs.length > 0
      ? <SongList songs={props.favoriteSongs} {...props} />
      : <TemplateLayout text="Here are your favorite songs!!!" />}
  </>
)

export { Favorites }