import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class StockEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    sku!: string;
    
    @Column()
    name!: string;

    @Column()
    count!: number;

    @Column()
    blocked!: number;

    @CreateDateColumn()
    createdAt!: Date;
}