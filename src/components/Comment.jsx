import styles from "./Comment.module.css"
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from "./Avatar"


export function Comment({content, onDeleteComment}){
    function handleDeleteComment() {
        console.log('deletar')

        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>  
                            <time title='13 de Novembro às 10:50h' dateTime='2022-11-13'>Cerca de 2h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}