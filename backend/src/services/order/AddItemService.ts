import prismaClient from "../../prisma"

interface ItemRequest {
    order_id: string;
    product_id: string;
    amount: number;
}

class AddItemService {
    async execute({ order_id, product_id, amount }: ItemRequest) {

        const orderItem = await prismaClient.item.create({
            data:{
                orderId: order_id,
                productId: product_id,
                amount
            }
        });

        return orderItem;
    }
}

export { AddItemService }