"use client";

import { Button } from "@/src/components/ui/button";
import { Heading } from "@/src/components/ui/heading";
import { Separator } from "@/src/components/ui/separator";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export const BillboardClient = () => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title="Billboards (0)" 
                    description="Manage billboards for your store"
                />
                <Button onClick={() => router.push(`/$(params.storeId)/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add New
                </Button>

            </div>
            <Separator />
        </>
    )
}