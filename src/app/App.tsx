import styles from './App.module.scss'
import {
  Button,
  Form,
  FormField,
  Select,
  TextArea
} from '../shared/ui/components'
import { Container } from '@/shared/ui/layout'

function App() {

  const nums = [1, 2, 3]
  return (
    <div className={styles.app}>
      <Container centeredChildren>
        <Form
          title='Форма'
          width='300px'>
          <FormField
            fieldType='input'
            title='Флекс'
            name='flex'
            value={''}
            onChange={() => { }}
            zodError='flex'
          />
          <Select
            options={nums.map((num) => ({
              value: num,
              title: num
            }))}
            defaultOptionTitle='Хайп'
          />
          <TextArea
            placeholder='Введите что-нибудь...'
          />
          <Button
            children='Хайп'
            variant='approve'
          />
        </Form>
      </Container>
    </div>
  )
}

export default App
