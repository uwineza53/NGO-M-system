import React, { useEffect, useState } from 'react'
import TableListRow from '../components/TableListRow';
import ModalBox from '../components/ModalBox';
import { IoEye, IoTrashBin } from 'react-icons/io5';
import { PiPencil } from 'react-icons/pi';
import Toast from '../components/Toast';
import { fetching, useFetch } from '../utils/useFetch';

const MemberView = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isToastOpen, setIsToastOpen] = useState(false);

    const handleEdit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModalOpen(true);
    }
    const handleToast = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsToastOpen(true);
    }

    // useEffect(() =>{
    //     const options = {
    //         method: 'GET',
    //         // body: JSON.stringify({'message': 'Hello World'})
    //     }
    //     fetching('http://127.0.0.1:9001/districts?province=1').then(res => res.json()).then(data => console.log(data));
    // },[isToastOpen]);
        

    return (
        <div className='report-page'>
            <section className='header'>
                <p className='title'>Members</p>
                <small className='subtitle'>List of registered members.</small>
            </section>
            {[1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7].map((i) => <TableListRow details={() => RowDetails(i)} className='gap-3 grid-cols-2 md:grid-cols-5'>
                <span>
                    <header>ID Number</header>
                    <sub-header>11113343 45334534 5435</sub-header>
                </span>
                <span>
                    <header>Names</header>
                    <sub-header>KALISA James</sub-header>
                </span>
                <span>
                    <header>Telephone No.</header>
                    <sub-header>+255 77 4534 543</sub-header>
                </span>
                <span>
                    <header>Profession</header>
                    <sub-header>IT Officer</sub-header>
                </span>
                <span className='flex justify-evenly'>
                    <IoEye onClick={handleToast} />
                    <PiPencil onClick={handleEdit} />
                    <IoTrashBin onClick={handleEdit} />
                </span>
            </TableListRow>)}

            {isModalOpen && <ModalBox toggler={setIsModalOpen}>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci repellat enim accusamus. Dignissimos, omnis, non molestiae sunt, ex eum quod rerum fuga expedita suscipit vero? Minus alias asperiores sequi. Natus sapiente animi vitae nesciunt blanditiis iure nobis officia vel, maiores repudiandae voluptas delectus? Totam iure, enim blanditiis nihil eum repellat et ipsa in facilis, veniam optio voluptatum recusandae neque labore sunt autem praesentium, dolor accusamus doloremque. Praesentium doloribus voluptatibus perspiciatis et mollitia. Ea quas possimus necessitatibus? Labore sit dolore in deserunt quod libero dicta quae suscipit vel, vero eveniet voluptatum! Magnam atque ut placeat consectetur dolorum facere vero animi praesentium.</div>
            </ModalBox>}
            {isToastOpen && <Toast toggler={setIsToastOpen}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, delectus?</p>
            </Toast>}
        </div>
    );
}

const RowDetails = (refId) => {
    
    return (
        <div className='h-[400px]'> { refId } Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis neque animi illo delectus ex? Quis accusantium accusamus nesciunt asperiores repellat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis in, cupiditate molestias libero doloribus consectetur molestiae corrupti dolor possimus fugiat quia magni ipsum facere voluptate. Doloremque consectetur pariatur sunt atque sequi numquam quas, rem amet placeat quis saepe laborum temporibus quasi repellendus dolore nam, ex deserunt officia vero illo obcaecati sit hic ratione optio! Dolore fuga repudiandae mollitia ea voluptatibus ut minima doloribus modi deserunt, eligendi nisi assumenda incidunt velit molestias maiores nam, at aliquid veritatis. Iusto quod excepturi, sed necessitatibus ea, animi cum laboriosam, officia nihil dolorum consequuntur hic quasi accusantium molestias voluptatum eligendi repudiandae ipsa mollitia. Modi reprehenderit accusantium, autem ex tempora minima corporis laudantium inventore harum ducimus est obcaecati placeat ullam qui at dolorem dolorum fugiat itaque dicta quam omnis. At ullam, numquam perspiciatis quas autem soluta. Dolorem sit expedita ipsam consequuntur? Distinctio quas perspiciatis repellendus voluptate eveniet recusandae, nemo pariatur quos excepturi! Debitis commodi dolore voluptatibus, eaque distinctio sit? Quae, qui adipisci, accusamus culpa sint laborum commodi dolorem dolor doloribus iusto aperiam assumenda totam molestiae exercitationem minus? Obcaecati doloremque assumenda tempora laudantium inventore, ipsam quidem tenetur aspernatur. Dignissimos voluptate, voluptatem voluptatibus veritatis distinctio tenetur quos aliquid dolorum omnis perspiciatis. Fugiat maiores cupiditate hic est nobis dolore perferendis dolor quod eos nesciunt quibusdam id, quisquam dignissimos doloribus.....</div>
    );
}

export default MemberView