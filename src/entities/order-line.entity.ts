import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class OrderLineEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    sku!: string;
 
    @Column()
    quantity!: number;

    @CreateDateColumn()
    createdAt!: Date;
}