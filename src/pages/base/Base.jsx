import './base.scss';


export default function Base() {
    return (
        <div className='base'>
            <h1 className="title">Base</h1>

            <ul class="timeline">
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="hexa"></span>
                            <span class="flag">Lorem ipsum.</span>
                            <span class="time-wrapper"><span class="time">Feb 2015</span></span>
                        </div>
                        <div class="desc">Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate exercitation deserunt proident.</div>
                    </div>
                </li>

                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="hexa"></span>
                            <span class="flag">Lorem ipsum Anim.</span>
                            <span class="time-wrapper"><span class="time">Dec 2014</span></span>
                        </div>
                        <div class="desc">Lorem ipsum In ut sit in dolor nisi ex magna eu anim anim tempor dolore aliquip enim cupidatat laborum dolore.</div>
                    </div>
                </li>

                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="hexa"></span>
                            <span class="flag">Lorem Occaecat.</span>
                            <span class="time-wrapper"><span class="time">July 2014</span></span>
                        </div>
                        <div class="desc">Lorem ipsum Minim labore Ut cupidatat quis qui deserunt proident fugiat pariatur cillum cupidatat reprehenderit sit id dolor consectetur ut.</div>
                    </div>
                </li>
                
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="hexa"></span>
                            <span class="flag">Lorem ipsum Anim.</span>
                            <span class="time-wrapper"><span class="time">Dec 2014</span></span>
                        </div>
                        <div class="desc">Lorem ipsum In ut sit in dolor nisi ex magna eu anim anim tempor dolore aliquip enim cupidatat laborum dolore.</div>
                    </div>
                </li>
                
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="hexa"></span>
                            <span class="flag">Lorem Occaecat.</span>
                            <span class="time-wrapper"><span class="time">July 2014</span></span>
                        </div>
                        <div class="desc">Lorem ipsum Minim labore Ut cupidatat quis qui deserunt proident fugiat pariatur cillum cupidatat reprehenderit sit id dolor consectetur ut.</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
