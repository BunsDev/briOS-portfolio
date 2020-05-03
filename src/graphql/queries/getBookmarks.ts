import { BookmarkInfoFragment } from '../fragments'
import { gql } from '@apollo/client'

export const GET_BOOKMARKS = gql`
  query GetBookmarks {
    bookmarks {
      ...BookmarkInfo
    }
  }
  ${BookmarkInfoFragment}
`
