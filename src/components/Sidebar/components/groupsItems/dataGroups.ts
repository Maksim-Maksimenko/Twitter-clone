import adob from '../../../../images/jpg/sidebar/adob.jpg'
import figma from '../../../../images/jpg/sidebar/figma.jpg'
import vizion from '../../../../images/jpg/sidebar/inVizion.jpg'

import external from '../../../../images/svg/external.svg'
import shape from '../../../../images/svg/Shape.svg'

type DataGroups = {
  images: string,
  title: string,
  description: string,
  promoted?: string,
  promotedIcon?: string,
  confirmation?: string
}

const Groups: Array<DataGroups> = [
  {
    images: vizion,
    title: 'InVision',
    description: '@InVisionApp',
    promoted: 'Promoted',
    promotedIcon: external
  },
  {
    images: figma,
    title: 'Figma',
    description: '@figmadesign',
    confirmation: shape
  },
  {
    images: adob,
    title: 'Adobe Illustrator',
    description: '@Illustrator',
    confirmation: shape
  },
  {
    images: vizion,
    title: 'InVision',
    description: '@InVisionApp',
    promoted: 'Promoted',
    promotedIcon: external
  },
  {
    images: figma,
    title: 'Figma',
    description: '@figmadesign',
    confirmation: shape
  },
  {
    images: adob,
    title: 'Adobe Illustrator',
    description: '@Illustrator',
    confirmation: shape
  }
]

export default Groups
