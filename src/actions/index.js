let nextFilmId = 0

export const addFilm = name  => ({
  type: 'ADD_FILM',
  id: nextFilmId++,
  name
})

export const removeFilm = id  => ({
  type: 'REMOVE_FILM',
  id

})


export const getSorted = () => ({
  type: 'GET_SORTED'

}
)
