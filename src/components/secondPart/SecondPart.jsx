import Btn from './btn/Btn';
import Card from './card/Card';
import Header from './header/Header';
import './secondPart.scss';

const IMG_URLS = [
    'amazon.svg', 'aliexpress.svg', 'ebay.svg', 'carters.svg', 'vs.svg', 'gap.svg', 
    'mk.svg', 'forever21.svg', 'hm.svg', 'rl.svg', 'ozon.svg', 'taobao.svg'
];

const title = 'ԼԱՎԱԳՈՒՅՆ ԽԱՆՈՒԹՆԵՐ';
const text = 'Միջազգային օնլայն խանութների 90%-ը առաքում չեն իրականացնում դեպի Հայաստան, սակայն ONEX-ի միջոցով կարող եք ստանալ Ձեր առաքանիները Հայաստանում ու Արցախում՝ արագ և ապահով';

function SecondPart() {


    return (
        <div className='second-container'>
            <Header title={title} text={text}/>
            <div className='container'>
                {
                    IMG_URLS.map(item => (
                        <Card key={Math.random()} url={item}/>
                    ))
                }
            </div>
            <Btn>Բոլոր խանութները</Btn>
        </div>
    );
}

export default SecondPart;