"use server";

import { DonationsData } from "@/interfaces/donations";
import { NoticiaData } from "../interfaces/noticias";
import prisma from "../lib/db";

// Endpoints

// Noticias
export const getAllNotices = async () => {
  const notice = await prisma.notice.findMany();
  return notice;
};

export const getByIdNotice = async ({ id }: { id: number }) => {
  const noticeById = await prisma.notice.findUnique({
    where: {
      id,
    },
  });

  return noticeById;
};

export const deleteNotice = async ({ id }: { id: number }) => {
  const notice = await prisma.notice.delete({
    where: {
      id,
    },
  });

  return notice;
};

export const createNotice = async ({ notice }: { notice: NoticiaData }) => {
  const newNotice = await prisma.notice.create({
    data: notice,
  });

  return newNotice;
};

export const updateNotice = async ({ id, notice }: { id: number; notice: string }) => {
  const newNotice = await prisma.notice.update({
    where: {
      id: id,
    },
    data: notice,
  });

  return newNotice;
};

// Donations

export const createDonation = async ({ donation }: { donation: DonationsData }) => {
  const newDonation = await prisma.donations.create({
    data: donation,
  });
};

export const getAllDonations = async () => {
  const donation = await prisma.donations.findMany();
  return donation;
};

// Productos

export const getAllProducts = async () => {
  const product = await prisma.products.findMany();
  return product;
};
