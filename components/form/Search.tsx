"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const formSchema = z.object({
  search: z.string(),
});

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: searchParams.get("query")?.toString(),
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    const params = new URLSearchParams(searchParams);
    if (data.search) {
      params.set("query", data.search);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function handleChange(search: string) {
    console.log(search);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
        <Button type="submit" variant="outline">
          <Image
            src="/icons/search.svg"
            height={20}
            width={20}
            alt="Search"
            className=""
          />
        </Button>
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Search for products..."
                  className="xl:w-[25rem] lg:w-[15rem] md:w-[25rem] sm:w-[15rem] w-[12rem]"
                  {...field}
                  onChangeCapture={(e: any) => {
                    handleChange(e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default Search;

// "use client";

// import Image from "next/image";
// import { useSearchParams, usePathname, useRouter } from "next/navigation";
// import { Button } from "../ui/button";

// export default function Search({ placeholder }: { placeholder: string }) {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

//   function handleSearch(term: string) {
//     const params = new URLSearchParams(searchParams);
//     if (term) {
//       params.set("query", term);
//     } else {
//       params.delete("query");
//     }
//     replace(`${pathname}?${params.toString()}`);
//   }

//   return (
//     <div className="">
//       <label htmlFor="search" className="sr-only">
//         Search
//       </label>
//       <input
//         className="xl:w-[25rem] lg:w-[15rem] md:w-[25rem] sm:w-[15rem] w-[12rem]"
//         placeholder={placeholder}
//         onChange={(e) => {
//           handleSearch(e.target.value);
//         }}
//         defaultValue={searchParams.get("query")?.toString()}
//       />
//       <Button type="submit" variant="outline">
//         <Image
//           src="/icons/search.svg"
//           height={20}
//           width={20}
//           alt="Search"
//           className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
//         />
//       </Button>
//     </div>
//   );
// }
