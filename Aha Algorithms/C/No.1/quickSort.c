#include<stdio.h>
int n = 10, a[10] = {6, 1, 2, 7, 9, 3, 4, 5, 10, 8};
void quickSort(int left, int right)
{
  int i, j, t, temp;
  if (left >= right)
    return;
  temp = a[left];
  i = left;
  j = right;
  while(i!=j) {
    // 顺序重要 先从右往左找
    if(a[j] >= temp && i < j) {
      j--;
    };
    if(a[i] <= temp && i < j) {
      i++;
    };
    if (i < j) {
      t = a[i];
      a[i] = a[j];
      a[j] = t;
    };
  };
  //最终将基准数归位
  a[left] = a[i];
  a[i] = temp;
  quickSort(left, i - 1);
  quickSort(i + 1, right);
};

int main ()
{
  int i;
  quickSort(1, n);
  for(i = 0; i < n; i++)
    printf("%d", a[i]);
  return 0;
}