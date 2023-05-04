const Card = (props) => {

function App(){
const noticias=[
    {
        titulo:"Titulo 4 ",
      descricao:"loren 4",
      link: 'link 4'
    },
    {
        titulo:"Titulo 5 ",
      descricao:"loren 5",
      link: 'link 5'
    },
    {
        titulo:"Titulo 6 ",
      descricao:"loren 6",
      link: 'link 6'
    },
    {
        titulo:"Titulo 7 ",
      descricao:"loren 7",
      link: 'link 7'
    },
];

}


    return(
        <>
            <div>
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
                <a href={props.link} target="_black"></a>
            </div>
        </>
    );
};

export default Card;