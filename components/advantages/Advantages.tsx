import React from 'react'
import TitleBlock from '../ui/titleBlock/Titleblock'
import Margin from '../ui/margin/Margin'

interface Advant {
    advantag: any,
    title: string,
}

export default function Advantages({ advantag, title }: Advant ) {
    return (
    <div id='advantages' className="advantages">
        <TitleBlock title={title} />
        <Margin />
        <div className="advantages__content">
            { advantag.map((item: any, index: number) => (
                <div key={index} className="advantages__content-block">
                    <p className='content'>
                        { item.content }
                    </p>
                    <div className="advantages__content-number">
                        { item.number }
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
