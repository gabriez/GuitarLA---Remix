import Guitarra from "./guitarra"

const ListGuitars = ({guitars}) => {
  return (
    <>
        <h2 className="heading">Nuestra colección</h2>
        {
          guitars?.length && (
            <div className="guitarras-grid">
              {
                guitars.map( guitarra => (
                  <Guitarra 
                    key={guitarra?.id}
                    guitarra={guitarra?.attributes}
                  />
                ))
              }
            </div>
          )
        } 
    </>
  )
}

export default ListGuitars
