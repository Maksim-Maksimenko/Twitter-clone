import home from "../../images/svg/nav/home.svg"
import explore from "../../images/svg/nav/explore.svg"
import notifications from "../../images/svg/nav/notifications.svg"
import messages from "../../images/svg/nav/messages.svg"
import bookmarks from "../../images/svg/nav/bookmarks.svg"
import lists from "../../images/svg/nav/lists.svg"
import profile from "../../images/svg/nav/profile.svg"
import more from "../../images/svg/nav/more.svg"

type Title = {
  title: string
  icon: string
}

const dataNav: Array<Title> = [
  {
    title: "Home",
    icon: home
  },
  {
    title: "Explore",
    icon: explore
  },
  {
    title: "Notifications",
    icon: notifications
  },
  {
    title: "Messages",
    icon: messages
  },
  {
    title: "Bookmarks",
    icon: bookmarks
  },
  {
    title: "Lists",
    icon: lists
  },
  {
    title: "Profile",
    icon: profile
  },
  {
    title: "More",
    icon: more
  }
]

export default dataNav
