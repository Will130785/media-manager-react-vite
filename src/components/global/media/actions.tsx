import { Link } from '@tanstack/react-router'

interface IActionsProps {
  editUrl: string
  id: string
  deleteHandler: () => void
}

const Actions = ({ editUrl, id, deleteHandler }: IActionsProps) => {
  return (
    <div className="flex gap-2">
      <Link to={editUrl} params={{ id }}>
        Edit
      </Link>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  )
}

export default Actions
